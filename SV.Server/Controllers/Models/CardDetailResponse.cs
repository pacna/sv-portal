using System.Collections.Generic;

namespace SV.Server.Controllers.Models
{
    public class CardDetailResponse : CardResponse
    {
        public string AbilityText { get; init; }
        public IList<string> AudioLocations { get; init; }
        public BattleStats BattleStats { get; init; }
        public string CardPack { get; init; }
        public EvoFollowerSpecs Evo { get; init; }
        public string FlavorText { get; init; }
        public int PPCost { get; init; }
        public RarityType Rarity { get; init; }
        public CardType Type { get; init; }
    }
}