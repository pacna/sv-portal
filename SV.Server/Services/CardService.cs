using System.Threading.Tasks;
using SV.Server.Controllers.Models;
using SV.Server.Repositories;

namespace SV.Server.Services
{
    public class CardService : ICardService
    {
        private readonly ICardRepository _cardRepo;
        public CardService(ICardRepository cardRepo)
        {
            this._cardRepo = cardRepo;
        }

        public async Task<CardResponse> SearchCards(CardSearchRequest request)
        {
            return await this._cardRepo.SearchComics(request);
        }
    }
}