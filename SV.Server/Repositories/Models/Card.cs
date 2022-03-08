using SV.Server.Controllers.Models;

namespace SV.Server.Repositories.Models
{
    public class Card
    {
        public string Id { get; init; }
        public string FlavorText { get; init; }
        public string Name { get; init; }
        public int PPCost { get; init; }
        public string ArtLocation { get; init; }
        public CraftType Craft { get; init; }
    }
}