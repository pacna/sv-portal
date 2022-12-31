using SV.Edge.Repositories.Models;
using SV.Edge.Services.Models;

namespace SV.Edge.Repositories;
public interface ICardRepository
{
    Task<List<Card>> SearchCardsAsync(SearchCardRequest request);
    Task<Card> GetCardAsync(string id);
    Task<Card> AddCardAsync(Card card);
    Task<Card> UpdateCardAsync(string id, UpdateCardRequest request);
    Task RemoveCardAsync(string id);
}