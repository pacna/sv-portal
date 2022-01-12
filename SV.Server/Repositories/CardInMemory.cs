using System.Collections.Generic;
using System.Threading.Tasks;
using SV.Server.Controllers.Models;

namespace SV.Server.Repositories
{
    public class CardInMemory : ICardRepository
    {
        private static Dictionary<string, CardResponse> cardsInMemory;

        static CardInMemory()
        {
            cardsInMemory = new Dictionary<string, CardResponse>();
        }

        public async Task<CardResponse> SearchComics(CardSearchRequest request)
        {
            return new CardResponse() { Name = "InMemory" };
        }
    }
}