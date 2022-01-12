using System.Threading.Tasks;
using SV.Server.Controllers.Models;

namespace SV.Server.Repositories
{
    public class CardRepository : ICardRepository
    {
        public async Task<CardResponse> SearchComics(CardSearchRequest request)
        {
            return new CardResponse { Name = "Repo" };
        }
    }
}