using System.Threading.Tasks;
using SV.Server.Controllers.Models;

namespace SV.Server.Repositories
{
    public interface ICardRepository
    {
        Task<CardResponse> SearchComics(CardSearchRequest request);
    }
}