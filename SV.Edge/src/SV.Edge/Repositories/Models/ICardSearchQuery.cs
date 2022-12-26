using SV.Edge.Services.Constants;

namespace SV.Edge.Repositories.Models;
public interface ICardSearchQuery
{
    CraftType? Craft { get; init; }
    string Name { get; init; }
    IList<RarityType> Rarities { get; init; }
    IList<CardType> Types { get; init; }
}