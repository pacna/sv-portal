using System.Collections.Generic;
using SV.Server.Repositories.Models;
using SV.Server.Services.Constants;

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