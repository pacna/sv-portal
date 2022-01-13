using System.Collections.Generic;
using System.Threading.Tasks;
using SV.Server.Controllers.Models;
using SV.Server.Repositories.Models;

namespace SV.Server.Repositories
{
    public interface ICardRepository
    {
        Task<List<Card>> SearchCards(CardSearchRequest request);
        Task<Card> AddCard(CardAddRequest request);
    }
}