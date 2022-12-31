using SV.Edge.Contexts;
using SV.Edge.Repositories.Models;
using SV.Edge.Services.Models;

namespace SV.Edge.Repositories;
internal class CardRepository : ICardRepository
{
    CardAggregateRepository _cardAggregateRepository;

    public CardRepository(SVPortalContext context)
    {
        this._cardAggregateRepository = new(context: context);
    }

    public Task<List<Card>> SearchCardsAsync(SearchCardRequest request)
    {
        return this._cardAggregateRepository.SearchCardsAsync(request: request);
    }

    public Task<Card> GetCardAsync(string id)
    {
        return this._cardAggregateRepository.GetCardAsync(id: id);
    }

    public Task<Card> AddCardAsync(Card card)
    {
        return this._cardAggregateRepository.AddCardAsync(() => new CardAggregateDocument(card));
    }

    public Task<Card> UpdateCardAsync(string id, UpdateCardRequest request)
    {
        return this._cardAggregateRepository.UpdateCardAsync(cardId: id, request: request);
    }

    public Task RemoveCardAsync(string id)
    {
        return this._cardAggregateRepository.RemoveCardAsync(cardId: id);
    }
}