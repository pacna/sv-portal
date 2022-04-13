using System.Collections.Generic;
using System.Threading.Tasks;
using SV.Server.Controllers.Models;

namespace SV.Server.Services
{
    public interface ICardService
    {
        Task<List<CardResponse>> SearchCardsAsync(CardSearchRequest request);
        Task<CardDetailResponse> GetCardAsync(string id);
        Task<CardResponse> AddCardAsync(CardAddRequest request);
        Task UpdateCardAsync(string id, CardUpdateRequest request);
        Task RemoveCardAsync(string id);
    }
}