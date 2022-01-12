using System.Threading.Tasks;
using SV.Server.Controllers.Models;

namespace SV.Server.Services
{
    public interface ICardService
    {
        Task<CardResponse> SearchCards(CardSearchRequest request);
    }
}