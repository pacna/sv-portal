using System.Collections.Generic;
using SV.Server.Controllers.Models;

namespace SV.Server.Repositories.Models
{
    public class CardDoc
    {
        public string AbilityText { get; init; }
        public string ArtLocation { get; init; }
        public List<string> AudioLocations { get; init; }
        public FollowerBattleStats BattleStats { get; init; }
        public string CardPack { get; init; }
        public CraftType Craft { get; init; }
        public EvoFollowerSpecs Evo { get; init; }
        public string FlavorText { get; init; }
        public string Id { get; init; }
        public string Name { get; init; }
        public int PPCost { get; init; }
        public RarityType Rarity { get; init; }
        public CardType Type { get; init; }
    }
}