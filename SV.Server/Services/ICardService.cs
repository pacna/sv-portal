using System.Collections.Generic;
using System.Threading.Tasks;
using SV.Server.Controllers.Models;
using SV.Server.Services.Models;

namespace SV.Server.Services
{
    public interface ICardService
    {
        Task<List<CardResponse>> SearchCardsAsync(SearchCardRequest request);
        Task<CardDetailResponse> GetCardAsync(string id);
        Task<CardResponse> AddCardAsync(AddCardRequest request);
        Task UpdateCardAsync(string id, CardPutRequest request);
        Task RemoveCardAsync(string id);
    }
}