using Microsoft.EntityFrameworkCore;
using SV.Edge.Contexts;
using SV.Edge.Contexts.Documents;
using SV.Edge.Repositories.Models;
using SV.Edge.Services.Models;
using Z.EntityFramework.Plus;

namespace SV.Edge.Repositories;
internal class CardAggregateRepository
{
    private readonly CardAggregateQueryBuilder _queryBuilder;
    private SVPortalContext _context;

    public CardAggregateRepository(SVPortalContext context)
    {
        this._context = context;
        this._queryBuilder = new(context: context);
    }

    public Task<List<Card>> SearchCardsAsync(SearchCardRequest request)
    {
        return this._queryBuilder.BuildSearchQuery(request).ToListAsync();
    }

    public Task<Card> GetCardAsync(string id)
    {
        return this._queryBuilder.BuildGetQuery(id: id).FirstOrDefaultAsync();
    }

    public async Task<Card> AddCardAsync(Func<CardAggregateDocument> translator)
    {
        CardAggregateDocument cardAggregateDoc = translator();
        CardDocument cardDoc = cardAggregateDoc.CardDocument;

        try
        {
            // order matters when inserting
            await this._context.Set<CardDocument>().AddAsync(cardDoc);
            await this._context.SaveChangesAsync();

            // safely add docs to table that are dependent on the card doc existing first
            Task audioTask = AddAudiosAsync(cardAggregateDoc.AudioDocuments.ToEnumerable(cardId: cardDoc.CardId));

            IList<EvoDocument> evos = new List<EvoDocument>();
            EvoDocument baseEvo = cardAggregateDoc.BaseEvoDocument.ToDocument(cardId: cardDoc.CardId);
            evos.Add(baseEvo);

            EvoDocument evolvedEvo = cardAggregateDoc.EvolvedEvoDocoument.ToDocument(cardId: cardDoc.CardId);
            if (evolvedEvo != null)
            {
                evos.Add(evolvedEvo);
            }

            Task evoTask = this._context.Set<EvoDocument>().AddRangeAsync(evos);

            await Task.WhenAll(audioTask, evoTask);
            await this._context.SaveChangesAsync();

            // safely add docs to table that are dependent on the evo docs existing first
            if (evolvedEvo != null)
            {
                BattleStatsDocument baseBattleStats = cardAggregateDoc.BaseBattleStatsDocument.ToDocument(evoId: baseEvo.EvoId);
                BattleStatsDocument evolvedBattleStats = cardAggregateDoc.EvolvedBattleStatsDocument.ToDocument(evoId: evolvedEvo.EvoId);

                await this._context.Set<BattleStatsDocument>().AddRangeAsync(baseBattleStats, evolvedBattleStats);
                await this._context.SaveChangesAsync();
            }
        }
        catch(Exception ex)
        {
            Console.WriteLine("DB error", ex.Message);
            throw new HttpException(HttpStatusCode.InternalServerError, ex.Message);
        }

        return new Card
        {
            Id = cardAggregateDoc.CardDocument.CardId,
            ArtLocation = cardAggregateDoc.BaseEvoDocument.ArtLocation,
            Craft = cardAggregateDoc.CardDocument.Craft,
            Name = cardAggregateDoc.CardDocument.Name,
            Rarity = cardAggregateDoc.CardDocument.Rarity,
            Type = cardAggregateDoc.CardDocument.Type
        };
    }

    public async Task<Card> UpdateCardAsync(string cardId, UpdateCardRequest request)
    {
        try
        {
            // order matters when updating
            // safely update the card doc before updating docs that have foreign key dependent
            await this._context.Set<CardDocument>().Where(x => x.CardId == cardId).UpdateAsync(x => new CardDocument
            {
                PPCost = request.PPCost,
                Name = request.Name
            });

            await this._context.SaveChangesAsync();

            // Npgsql doesn't like having multiple different operations on the same table so separting the add and delete on audio docs 
            await this._context.Set<AudioDocument>().Where(x => x.CardId == cardId).DeleteAsync();
            await this._context.SaveChangesAsync();

            Task audiosAddTask = AddAudiosAsync(request.AudioLocations.ToEnumerable(cardId: cardId));
            Task baseEvoUpdateTask = this._context.Set<EvoDocument>().Where(x => x.CardId == cardId && !x.IsEvo).UpdateAsync(x => new EvoDocument
            {
                ArtLocation = request.BaseEvo.ArtLocation,
                AbilityText = request.BaseEvo.AbilityText,
                FlavorText = request.BaseEvo.FlavorText
            });

            await Task.WhenAll(audiosAddTask, baseEvoUpdateTask);
            await this._context.SaveChangesAsync();

            // safely update the evo doc before updating docs that have foreign key dependent 
            if (request.Evolved != null)
            {
                List<EvoDocument> evos = await this._queryBuilder.BuildEvoSearchQuery(cardId: cardId).ToListAsync();
                string baseEvoId = evos.Where(x => !x.IsEvo).Select(x => x.EvoId).FirstOrDefault();
                string evolvedId = evos.Where(x => x.IsEvo).Select(x => x.EvoId).FirstOrDefault();

                await this._context.Set<BattleStatsDocument>().Where(x => x.EvoId == baseEvoId).UpdateAsync(x => new BattleStatsDocument
                {
                    Atk = request.BaseEvo.BattleStats.Atk,
                    Def = request.BaseEvo.BattleStats.Def
                });
                await this._context.SaveChangesAsync();

                await this._context.Set<EvoDocument>().Where(x => x.CardId == cardId && x.IsEvo).UpdateAsync(x => new EvoDocument
                {
                    ArtLocation = request.Evolved.ArtLocation,
                    AbilityText = request.Evolved.AbilityText,
                    FlavorText = request.Evolved.FlavorText
                });
                await this._context.SaveChangesAsync();

                await this._context.Set<BattleStatsDocument>().Where(x => x.EvoId == evolvedId).UpdateAsync(x => new BattleStatsDocument
                {
                    Atk = request.Evolved.BattleStats.Atk,
                    Def = request.Evolved.BattleStats.Def
                });
                await this._context.SaveChangesAsync();
            }

            return new Card
            {
                Id = cardId,
                ArtLocation = request.BaseEvo.ArtLocation,
                Craft = request.Craft,
                Name = request.Name,
                Rarity = request.Rarity,
                Type = request.Type
            };                
        }
        catch(Exception ex)
        {
            Console.WriteLine("DB error", ex.Message);
            throw new HttpException(HttpStatusCode.InternalServerError, ex.Message);
        }
    }

    public async Task RemoveCardAsync(string cardId)
    {
        try
        {
            // order matters when deleting
            // delete all foreign keys dependencies first before removing the primary document that has the primary key
            IList<string> evoIds = await this._queryBuilder.BuildEvoIdsSearchQuery(cardId: cardId).ToListAsync();
            await this._context.Set<BattleStatsDocument>().Where(x => evoIds.Contains(x.EvoId)).DeleteAsync();
            await this._context.SaveChangesAsync();

            Task audioRemoveTask = this._context.Set<AudioDocument>().Where(x => x.CardId == cardId).DeleteAsync();
            Task evoRemoveTask = this._context.Set<EvoDocument>().Where(x => x.CardId == cardId).DeleteAsync();
            await Task.WhenAll(audioRemoveTask, evoRemoveTask);
            await this._context.SaveChangesAsync();

            await this._context.Set<CardDocument>().Where(x => x.CardId == cardId).DeleteAsync();
            await this._context.SaveChangesAsync();
        }
        catch(Exception ex)
        {
            Console.WriteLine("DB error", ex.Message);
            throw new HttpException(HttpStatusCode.InternalServerError, ex.Message);
        }
    }

    private Task AddAudiosAsync(IEnumerable<AudioDocument> audioDocuments)
    {
        if (!audioDocuments.IsNullOrEmpty())
            return this._context.Set<AudioDocument>().AddRangeAsync(audioDocuments);
        return Task.CompletedTask;
    }
}