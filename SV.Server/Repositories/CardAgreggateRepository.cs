using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using SV.Server.Contexts;
using SV.Server.Contexts.Documents;
using SV.Server.Repositories.Models;
using SV.Server.Services.Models;
using Z.EntityFramework.Plus;

namespace SV.Server.Repositories
{
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
                Console.WriteLine("DB error", ex.ToString());
                throw new HttpException(HttpStatusCode.InternalServerError, ex.ToString());
            }

            return new Card
            {
                Id = cardAggregateDoc.CardDocument.CardId,
                CardPack = cardAggregateDoc.CardDocument.CardPack,
                Name = cardAggregateDoc.CardDocument.Name,
                PPCost = cardAggregateDoc.CardDocument.PPCost,
                Rarity = cardAggregateDoc.CardDocument.Rarity,
                Type = cardAggregateDoc.CardDocument.Type
            };
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
                Console.WriteLine("DB error", ex.ToString());
                throw new HttpException(HttpStatusCode.InternalServerError, ex.ToString());
            }
        }

        private Task AddAudiosAsync(IEnumerable<AudioDocument> audioDocuments)
        {
            if (!audioDocuments.IsNullOrEmpty())
                return this._context.Set<AudioDocument>().AddRangeAsync(audioDocuments);
            return Task.CompletedTask;
        }
    }
}