using System.Collections.Generic;
using System.Threading.Tasks;
using SV.Server.Controllers.Models;
using SV.Server.Repositories.Models;
using SV.Server.Services.Models;

namespace SV.Server.Repositories
{
    public interface ICardRepository
    {
        Task<List<Card>> SearchCardsAsync(SearchCardRequest request);
        Task<Card> GetCardAsync(string id);
        Task<Card> AddCardAsync(Card card);
        Task UpdateCardAsync(string id, CardPutRequest request);
        Task RemoveCardAsync(string id);
    }
}