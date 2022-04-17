using System.Linq;
using SV.Server.Contexts;
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

        public IQueryable<CardEvoView> BuildSearchQuery()
        {
            return this._queryableCard.Join
            (
                this._queryableEvo,
                card => card.CardId,
                evo => evo.CardId,
                (card, evo) => new CardEvoView
                {
                    Id = card.CardId,
                    ArtLocation = evo.ArtLocation,
                    Craft = card.Craft,
                    Name = card.Name,
                    IsEvo = evo.IsEvo
                }
            ).Where(x => !x.IsEvo);
        }

        public IQueryable<string> BuildAudioGetQuery(string cardId)
        {
            return this.GetAudioByCardId(cardId: cardId).Select(x => x.Location);
        }

        public IQueryable<CardDoc> BuildGetQuery(string id)
        {
            return (from card in this._queryableCard
                    join evo in this._queryableEvo on card.CardId equals evo.CardId
                    where !evo.IsEvo
                    select new CardDoc
                    {
                        AbilityText = evo.AbilityText,
                        ArtLocation = evo.ArtLocation,
                        CardPack = card.CardPack,
                        Craft = card.Craft,
                        FlavorText = evo.FlavorText,
                        Id = card.CardId,
                        Name = card.Name,
                        PPCost = card.PPCost,
                        Rarity = card.Rarity,
                        Type = card.Type
                    });
        }

        private IQueryable<Audio> GetAudioByCardId(string cardId)
        {
            return this._queryableAudio.Where(x => x.CardId == cardId);
        }

        public IQueryable<BattleStats> BuildGetBattleStatsByEvoIdQuery(string evoId)
        {
            return this._queryableBattleStats.Where(x => x.EvoId == evoId);
        }

        public IQueryable<Evo> BuildGetEvoByCardIdQuery(string cardId, bool isEvo = false)
        {
            return this._queryableEvo.Where(x => x.EvoId == cardId && x.IsEvo == isEvo);
        }
    }
}