using SV.Server.Controllers.Models;

namespace SV.Server.Repositories.Models
{
    public class CardEvoView
    {
        public string ArtLocation { get; init; }
        public CraftType Craft { get; init; }
        public string Id { get; init; }
        public bool IsEvo { get; init; }
        public string Name { get; init; }

        public CardDoc ToDataLayer()
        {
            return new CardDoc
            {
                ArtLocation = this.ArtLocation,
                Craft = this.Craft,
                Id = this.Id,
                Name = this.Name
            };
        }
    }
}