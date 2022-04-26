using SV.Server.Services.Constants;

namespace SV.Server.Controllers.Models
{
    public class CardResponse
    {
        public string ArtLocation { get; init; }
        public CraftType Craft { get; init; }
        public string Id { get; init; }
        public string Name { get; init; }
    }
}