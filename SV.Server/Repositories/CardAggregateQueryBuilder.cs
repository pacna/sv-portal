using System.Linq;
using SV.Server.Contexts;
using SV.Server.Controllers.Models;
using SV.Server.Repositories.Models;

namespace SV.Server.Repositories
{
    internal class CardAggregateQueryBuilder
    {
        private IQueryable<AudioDocument> _queryableAudio;
        private IQueryable<BattleStatsDocument> _queryableBattleStats;
        private IQueryable<CardDocument> _queryableCard;
        private IQueryable<EvoDocument> _queryableEvo;

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

        public IQueryable<Card> BuildSearchQuery()
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
                    AudioLocations =
                    (
                        from card in this._queryableCard
                        join audio in this._queryableAudio on card.CardId equals audio.CardId
                        where card.CardId == id
                        select audio.Location
                    ).ToList(),
                    BattleStats =
                    (
                        from evo in this._queryableEvo
                        join battleStats in this._queryableBattleStats on evo.EvoId equals battleStats.EvoId
                        where evo.CardId == id && !evo.IsEvo
                        select new BattleStats
                        {
                            Atk = battleStats.Atk,
                            Def = battleStats.Def
                        }
                    ).FirstOrDefault(),
                    CardPack = card.CardPack,
                    Craft = card.Craft,
                    Evo =
                    (
                        from evoCard in this._queryableCard
                        join secondaryEvo in this._queryableEvo on evoCard.CardId equals secondaryEvo.CardId
                        where evoCard.CardId == id && secondaryEvo.IsEvo
                        select new EvoFollowerSpecs
                        {
                            AbilityText = secondaryEvo.AbilityText,
                            ArtLocation = secondaryEvo.ArtLocation,
                            BattleStats =
                            (
                                from secondaryEvo in this._queryableEvo
                                join evoBattleStats in this._queryableBattleStats on secondaryEvo.EvoId equals evoBattleStats.EvoId
                                where secondaryEvo.IsEvo
                                select new BattleStats
                                {
                                    Atk = evoBattleStats.Atk,
                                    Def = evoBattleStats.Def
                                }
                            ).FirstOrDefault(),
                            FlavorText = secondaryEvo.FlavorText
                        }
                    ).FirstOrDefault(),
                    FlavorText = evo.FlavorText,
                    Id = card.CardId,
                    Name = card.Name,
                    PPCost = card.PPCost,
                    Rarity = card.Rarity,
                    Type = card.Type
                }
            );
        }
    }
}