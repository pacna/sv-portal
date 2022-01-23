using System.Collections.Generic;
using System.Threading.Tasks;
using SV.Server.Controllers.Models;
using SV.Server.Repositories.Models;

namespace SV.Server.Repositories
{
    public interface ICardRepository
    {
        Task<List<Card>> SearchCards(CardSearchRequest request);
        Task<Card> GetCard(string id);
        Task<Card> AddCard(CardAddRequest request);
        Task UpdateCard(string id, CardUpdateRequest request);
        Task RemoveCard(string id);
    }
}