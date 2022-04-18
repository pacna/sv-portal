using System.Collections.Generic;
using SV.Server.Services.Models;

namespace SV.Server.Controllers.Models
{
    public class CardSearchRequest : PaginationSearchRequest
    {
        public CraftType? Craft { get; init; }
        public string Name { get; init; }
        public IList<RarityType> Rarities { get; init; }
        public IList<CardType> Types { get; init; }

        internal SearchCardRequest ToDataLayer()
        {
            return new SearchCardRequest
            {
                Craft = this.Craft,
                Name = this.Name,
                Rarities = this.Rarities,
                Types = this.Types
            };
        }
    }
}