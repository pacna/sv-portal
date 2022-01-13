using System.Collections.Generic;
using System.Threading.Tasks;
using SV.Server.Controllers.Models;
using SV.Server.Repositories.Models;

namespace SV.Server.Repositories
{
    public class CardRepository : ICardRepository
    {
        public async Task<List<Card>> SearchCards(CardSearchRequest request)
        {
            return null;
        }

        public async Task<Card> AddCard(CardAddRequest request)
        {
            return new Card();
        }
    }
}