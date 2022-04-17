using System.Linq;
using SV.Server.Contexts;
using SV.Server.Controllers.Models;
using SV.Server.Repositories.Models;

namespace SV.Server.Repositories
{
    internal class CardAggregateQueryBuilder
    {
        IQueryable<Audio> _queryableAudio;
        IQueryable<BattleStats> _queryableBattleStats;
        IQueryable<Card> _queryableCard;
        IQueryable<Evo> _queryableEvo;

        public CardAggregateQueryBuilder(SVPortalContext context)
        {
            this._queryableAudio = context.Set<Audio>().AsQueryable();
            this._queryableBattleStats = context.Set<BattleStats>().AsQueryable<BattleStats>();
            this._queryableCard = context.Set<Card>().AsQueryable<Card>();
            this._queryableEvo = context.Set<Evo>().AsQueryable<Evo>();
        }

        public IQueryable<CardDoc> BuildSearchQuery()
        {
            return
            (
                from card in this._queryableCard
                join evo in this._queryableEvo on card.CardId equals evo.CardId
                where !evo.IsEvo
                select new CardDoc
                {
                    Id = card.CardId,
                    Craft = card.Craft,
                    ArtLocation = evo.ArtLocation,
                    Name = card.Name
                }
            );
        }

        public IQueryable<CardDoc> BuildGetQuery(string id)
        {
            return
            (
                from card in this._queryableCard
                join evo in this._queryableEvo on card.CardId equals evo.CardId
                where card.CardId == id && !evo.IsEvo
                select new CardDoc
                {
                    AbilityText = evo.AbilityText,
                    ArtLocation = evo.ArtLocation,
                    AudioLocations =
                    (
                        from card in this._queryableCard
                        join audio in this._queryableAudio on card.CardId equals audio.CardId
                        select audio.Location
                    ).ToList(),
                    BattleStats =
                    (
                        from evo in this._queryableEvo
                        join battleStats in this._queryableBattleStats on evo.EvoId equals battleStats.EvoId
                        where !evo.IsEvo
                        select new FollowerBattleStats
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
                                select new FollowerBattleStats
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