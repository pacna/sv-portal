using System.Collections.Generic;
using System.Threading.Tasks;
using SV.Server.Controllers.Models;

namespace SV.Server.Services
{
    public interface ICardService
    {
        Task<List<CardResponse>> SearchCards(CardSearchRequest request);
        Task<CardDetailResponse> GetCard(string id);
        Task<CardResponse> AddCard(CardAddRequest request);
        Task UpdateCard(string id, CardUpdateRequest request);
        Task RemoveCard(string id);
    }
}