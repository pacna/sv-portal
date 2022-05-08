using System.Collections.Generic;
using System.Threading.Tasks;
using SV.Edge.Controllers.Models;
using SV.Edge.Services.Models;

namespace SV.Edge.Services
{
    public interface ICardService
    {
        Task<List<CardResponse>> SearchCardsAsync(SearchCardRequest request);
        Task<CardDetailResponse> GetCardAsync(string id);
        Task<CardResponse> AddCardAsync(AddCardRequest request);
        Task<CardResponse> UpdateCardAsync(string id, CardPutRequest request);
        Task RemoveCardAsync(string id);
    }
}