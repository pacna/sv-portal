using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SV.Server.Contexts;
using SV.Server.Controllers.Models;
using SV.Server.Repositories.Models;

namespace SV.Server.Repositories
{
    internal class CardRepository : ICardRepository
    {
        CardAggregateRepository _cardAggregateRepository;

        public CardRepository(SVPortalContext context)
        {
            this._cardAggregateRepository = new(context: context);
        }

        public Task<List<CardDoc>> SearchCardsAsync(CardSearchRequest request)
        {
            return this._cardAggregateRepository.SearchCardsAsync();
        }

        public Task<CardDoc> GetCardAsync(string id)
        {
            return this._cardAggregateRepository.GetCardAsync(id: id);
        }

        public Task<CardDoc> AddCardAsync(CardAddRequest request)
        {
            return Task.FromResult<CardDoc>(new CardDoc());
        }

        public Task UpdateCardAsync(string id, CardUpdateRequest request)
        {
            return Task.CompletedTask;
        }

        public Task RemoveCardAsync(string id)
        {
            return Task.CompletedTask;
        }
    }
}