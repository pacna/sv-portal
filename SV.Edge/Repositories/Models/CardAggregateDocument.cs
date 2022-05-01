using System.Collections.Generic;
using SV.Edge.Contexts.Documents;

namespace SV.Edge.Repositories.Models
{
    internal class CardAggregateDocument
    {
        public CardAggregateDocument(Card card)
        {
            this.CardDocument = card.ToDocument();
            this.AudioDocuments = card.AudioLocations.ToList();
            this.BaseEvoDocument = card.ToDocument(isEvo: false);
            this.EvolvedEvoDocoument = card.Evo.ToDocument(isEvo: true);
            this.BaseBattleStatsDocument = card?.BattleStats.ToDocument();
            this.EvolvedBattleStatsDocument = card?.Evo?.BattleStats.ToDocument();
        }

        public CardDocument CardDocument { get; init; }
        public List<AudioDocument> AudioDocuments { get; init; }
        public EvoDocument BaseEvoDocument { get; init; }
        public EvoDocument EvolvedEvoDocoument { get; init; }
        public BattleStatsDocument BaseBattleStatsDocument { get; init; }
        public BattleStatsDocument EvolvedBattleStatsDocument { get; init; }
    }
}