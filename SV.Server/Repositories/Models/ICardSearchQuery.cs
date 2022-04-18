using System.Collections.Generic;
using SV.Server.Controllers.Models;

namespace SV.Server.Repositories.Models
{
    public interface ICardSearchQuery
    {
        CraftType? Craft { get; init; }
        string Name { get; init; }
        IList<RarityType> Rarities { get; init; }
        IList<CardType> Types { get; init; }
    }
}