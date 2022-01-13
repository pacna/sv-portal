using System.Collections.Generic;
using System.Threading.Tasks;
using SV.Server.Controllers.Models;

namespace SV.Server.Services
{
    public interface ICardService
    {
        Task<List<CardResponse>> SearchCards(CardSearchRequest request);
        Task<CardResponse> AddCard(CardAddRequest request);
    }
}