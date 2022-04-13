using System.Collections.Generic;
using System.Threading.Tasks;
using SV.Server.Controllers.Models;
using SV.Server.Repositories.Models;

namespace SV.Server.Repositories
{
    public interface ICardRepository
    {
        Task<List<CardDoc>> SearchCardsAsync(CardSearchRequest request);
        Task<CardDoc> GetCardAsync(string id);
        Task<CardDoc> AddCardAsync(CardAddRequest request);
        Task UpdateCardAsync(string id, CardUpdateRequest request);
        Task RemoveCardAsync(string id);
    }
}