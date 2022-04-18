using System.Collections.Generic;
using System.Threading.Tasks;
using SV.Server.Controllers.Models;
using SV.Server.Repositories;
using SV.Server.Repositories.Models;

namespace SV.Server.Services
{
    internal class CardService : ICardService
    {
        private readonly ICardRepository _cardRepo;
        public CardService(ICardRepository cardRepo)
        {
            this._cardRepo = cardRepo;
        }

        public async Task<List<CardResponse>> SearchCardsAsync(CardSearchRequest request)
        {
            List<Card> cards = await this._cardRepo.SearchCardsAsync(request.ToDataLayer());
            return CardMapper.Map(cards: cards);
        }

        public async Task<CardDetailResponse> GetCardAsync(string id)
        {
            Card card = await this._cardRepo.GetCardAsync(id: id);
            return CardMapper.MapDetailResponse(card: card);
        }

        public async Task<CardResponse> AddCardAsync(CardAddRequest request)
        {
            Card card = await this._cardRepo.AddCardAsync(request);
            return CardMapper.Map(card: card);
        }

        public Task UpdateCardAsync(string id, CardUpdateRequest request)
        {
            return this._cardRepo.UpdateCardAsync(id: id, request: request);
        }

        public Task RemoveCardAsync(string id)
        {
            return this._cardRepo.RemoveCardAsync(id: id);
        }
    }
}