using System.Collections.Generic;

namespace SV.Server.Controllers.Models
{
    public class CardSearchRequest : PaginationSearchRequest
    {
        public CraftType? Craft { get; init; }
        public string Name { get; init; }
        public IList<RarityType> Rarities { get; init; }
        public IList<CardType> Types { get; init; }
    }
}