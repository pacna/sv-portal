using SV.Edge.Controllers.Models;
using SV.Edge.Services.Models;

namespace SV.Edge.Services;

public interface ICardService
{
    Task<List<CardResponse>> SearchCardsAsync(SearchCardRequest request);
    Task<CardDetailResponse> GetCardAsync(string id);
    Task<CardResponse> AddCardAsync(AddCardRequest request);
    Task<CardResponse> UpdateCardAsync(string id, UpdateCardRequest request);
    Task RemoveCardAsync(string id);
}