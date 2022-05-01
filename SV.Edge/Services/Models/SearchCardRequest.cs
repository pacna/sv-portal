using System.Collections.Generic;
using SV.Edge.Repositories.Models;
using SV.Edge.Services.Constants;

namespace SV.Edge.Services.Models
{
    public class SearchCardRequest : ICardSearchQuery
    {
        public CraftType? Craft { get; init; }
        public string Name { get; init; }
        public IList<RarityType> Rarities { get; init; }
        public IList<CardType> Types { get; init; }
    }
}