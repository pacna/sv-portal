using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SV.Server.Contexts;
using SV.Server.Controllers.Models;
using SV.Server.Repositories.Models;

namespace SV.Server.Repositories
{
    public class CardRepository : PostgresRepository, ICardRepository
    {
        public CardRepository(SVPortalContext context) : base(context: context)
        {
        }

        public async Task<List<CardDoc>> SearchCards(CardSearchRequest request)
        {
            List<Card> cards = await base.SearchCards();

            return cards.Select(x => new CardDoc
            {
                Id = x.CardId,
                Name = x.Name,
                Craft = x.Craft

            }).ToList();
        }

        public async Task<CardDoc> GetCard(string id)
        {
            return null;
        }

        public async Task<CardDoc> AddCard(CardAddRequest request)
        {
            return new CardDoc();
        }

        public async Task UpdateCard(string id, CardUpdateRequest request)
        {
            return;
        }

        public async Task RemoveCard(string id)
        {
            return;
        }
    }
}