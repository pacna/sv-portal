using System.Linq;
using SV.Server.Contexts;
using SV.Server.Contexts.Documents;
using SV.Server.Repositories.Models;
using SV.Server.Services.Models;

namespace SV.Server.Repositories
{
    internal class CardAggregateQueryBuilder
    {
        private readonly IQueryable<AudioDocument> _queryableAudio;
        private readonly IQueryable<BattleStatsDocument> _queryableBattleStats;
        private readonly IQueryable<CardDocument> _queryableCard;
        private readonly IQueryable<EvoDocument> _queryableEvo;

        public CardAggregateQueryBuilder(SVPortalContext context)
        {
            this._queryableAudio = context.Set<AudioDocument>().AsQueryable<AudioDocument>();
            this._queryableBattleStats = context.Set<BattleStatsDocument>().AsQueryable<BattleStatsDocument>();
            this._queryableCard = context.Set<CardDocument>().AsQueryable<CardDocument>();
            this._queryableEvo = context.Set<EvoDocument>().AsQueryable<EvoDocument>();
        }

        public IQueryable<Card> BuildSearchQuery(ICardSearchQuery query)
        {
            IQueryable<Card> searchQuery = this.BuildSearchQuery();

            if (query.Craft.HasValue)
            {
                searchQuery = searchQuery.Where(x => x.Craft == query.Craft.Value);
            }

            if (!string.IsNullOrEmpty(query.Name))
            {
                searchQuery = searchQuery.Where(x => x.Name.ToLower().Contains(query.Name.ToLower()));
            }

            if (!query.Rarities.IsNullOrEmpty())
            {
                searchQuery = searchQuery.Where(x => query.Rarities.Contains(x.Rarity));
            }

            if (!query.Types.IsNullOrEmpty())
            {
                searchQuery = searchQuery.Where(x => query.Types.Contains(x.Type));
            }

            return searchQuery;
        }

        public IQueryable<string> BuildEvoIdsSearchQuery(string cardId)
        {
            return
            (
                from evo in this._queryableEvo
                where evo.CardId == cardId
                select evo.EvoId
            );
        }

        public IQueryable<Card> BuildGetQuery(string id)
        {
            return
            (
                from card in this._queryableCard
                join evo in this._queryableEvo on card.CardId equals evo.CardId
                where card.CardId == id && !evo.IsEvo
                select new Card
                {
                    AbilityText = evo.AbilityText,
                    ArtLocation = evo.ArtLocation,
                    AudioLocations = this.BuildAudioGetQuery(id).ToList(),
                    BattleStats = this.BuildBattleStatsGetQuery(id, false).FirstOrDefault(),
                    CardPack = card.CardPack,
                    Craft = card.Craft,
                    Evo = this.BuildEvoSpecsGetQuery(id).FirstOrDefault(),
                    FlavorText = evo.FlavorText,
                    Id = card.CardId,
                    Name = card.Name,
                    PPCost = card.PPCost,
                    Rarity = card.Rarity,
                    Type = card.Type
                }
            );
        }

        private IQueryable<Card> BuildSearchQuery()
        {
            return
            (
                from card in this._queryableCard
                join evo in this._queryableEvo on card.CardId equals evo.CardId
                where !evo.IsEvo
                select new Card
                {
                    Id = card.CardId,
                    Craft = card.Craft,
                    ArtLocation = evo.ArtLocation,
                    Name = card.Name,
                    Rarity = card.Rarity,
                    Type = card.Type
                }
            );
        }

        private IQueryable<EvoSpecs> BuildEvoSpecsGetQuery(string cardId)
        {
            return
            (
                from card in this._queryableCard
                join evo in this._queryableEvo on card.CardId equals evo.CardId
                where evo.CardId == cardId && evo.IsEvo
                select new EvoSpecs
                {
                    AbilityText = evo.AbilityText,
                    ArtLocation = evo.ArtLocation,
                    BattleStats = this.BuildBattleStatsGetQuery(cardId, true).FirstOrDefault(),
                    FlavorText = evo.FlavorText
                }
            );
        }

        private IQueryable<BattleStats> BuildBattleStatsGetQuery(string cardId, bool isEvo)
        {
            return
            (
                from evo in this._queryableEvo
                join battleStats in this._queryableBattleStats on evo.EvoId equals battleStats.EvoId
                where evo.CardId == cardId && evo.IsEvo == isEvo
                select new BattleStats
                {
                    Atk = battleStats.Atk,
                    Def = battleStats.Def
                }
            );
        }

        private IQueryable<string> BuildAudioGetQuery(string cardId)
        {
            return
            (
                from card in this._queryableCard
                join audio in this._queryableAudio on card.CardId equals audio.CardId
                where card.CardId == cardId
                select audio.Location
            );
        }
    }
}