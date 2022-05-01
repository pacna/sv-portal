using System.Collections.Generic;
using System.Threading.Tasks;
using SV.Server.Contexts;
using SV.Server.Repositories.Models;
using SV.Server.Services.Models;

namespace SV.Server.Repositories
{
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

        public Task UpdateCardAsync(string id, UpdateCardRequest request)
        {
            return Task.CompletedTask;
        }

        public Task RemoveCardAsync(string id)
        {
            return this._cardAggregateRepository.RemoveCardAsync(cardId: id);
        }
    }
}