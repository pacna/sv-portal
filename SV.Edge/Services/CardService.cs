using System.Collections.Generic;
using System.Threading.Tasks;
using SV.Edge.Controllers.Models;
using SV.Edge.Repositories;
using SV.Edge.Repositories.Models;
using SV.Edge.Services.Models;

namespace SV.Edge.Services
{
    internal class CardService : ICardService
    {
        private readonly ICardRepository _cardRepo;
        public CardService(ICardRepository cardRepo)
        {
            this._cardRepo = cardRepo;
        }

        public async Task<List<CardResponse>> SearchCardsAsync(SearchCardRequest request)
        {
            List<Card> cards = await this._cardRepo.SearchCardsAsync(request: request);
            return CardMapper.Map(cards: cards);
        }

        public async Task<CardDetailResponse> GetCardAsync(string id)
        {
            Card card = await this._cardRepo.GetCardAsync(id: id);
            return CardMapper.MapDetailResponse(card: card);
        }

        public async Task<CardResponse> AddCardAsync(AddCardRequest request)
        {
            request.ThrowIfInvalid();
 
            Card card = await this._cardRepo.AddCardAsync(CardMapper.Map(request: request));
            return CardMapper.Map(card: card);
        }

        public Task UpdateCardAsync(string id, CardPutRequest request)
        {
            return this._cardRepo.UpdateCardAsync(id: id, request: new UpdateCardRequest());
        }

        public Task RemoveCardAsync(string id)
        {
            return this._cardRepo.RemoveCardAsync(id: id);
        }
    }
}