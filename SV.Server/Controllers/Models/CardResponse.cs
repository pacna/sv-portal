namespace SV.Server.Controllers.Models
{
    public class CardResponse
    {
        public string Id { get; init; }
        public string Name { get; init; }
        public string ArtLocation { get; init; }
        public CraftType Craft { get; init; }
    }
}