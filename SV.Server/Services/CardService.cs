using System.Collections.Generic;
using System.Threading.Tasks;
using SV.Server.Controllers.Models;
using SV.Server.Repositories;
using SV.Server.Repositories.Models;

namespace SV.Server.Services
{
    public class CardService : ICardService
    {
        private readonly ICardRepository _cardRepo;
        public CardService(ICardRepository cardRepo)
        {
            this._cardRepo = cardRepo;
        }

        public async Task<List<CardResponse>> SearchCards(CardSearchRequest request)
        {
            List<Card> cards = await this._cardRepo.SearchCards(request);
            return CardMapper.Map(cards: cards);
        }

        public async Task<CardResponse> GetCard(string id)
        {
            Card card = await this._cardRepo.GetCard(id: id);
            return CardMapper.Map(card: card);
        }

        public async Task<CardResponse> AddCard(CardAddRequest request)
        {
            Card card = await this._cardRepo.AddCard(request);
            return CardMapper.Map(card: card);
        }

        public async Task UpdateCard(string id, CardUpdateRequest request)
        {
            await this._cardRepo.UpdateCard(id: id, request: request);
        }

        public async Task RemoveCard(string id)
        {
            await this._cardRepo.RemoveCard(id: id);
        }
    }
}