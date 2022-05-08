using SV.Edge.Services.Constants;

namespace SV.Edge.Controllers.Models
{
    public class CardResponse
    {
        public string ArtLocation { get; init; }
        public CraftType Craft { get; init; }
        public string Id { get; init; }
        public string Name { get; init; }
        public RarityType Rarity  { get; init; }
        public CardType Type { get; init; }
    }
}