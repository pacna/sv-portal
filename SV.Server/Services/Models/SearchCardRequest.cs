using System.Collections.Generic;
using SV.Server.Controllers.Models;
using SV.Server.Repositories.Models;

namespace SV.Server.Services.Models
{
    public class SearchCardRequest : ICardSearchQuery
    {
        public CraftType? Craft { get; init; }
        public string Name { get; init; }
        public IList<RarityType> Rarities { get; init; }
        public IList<CardType> Types { get; init; }
    }
}