using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using SV.Server.Controllers.Models;
using SV.Server.Repositories.Models;

namespace SV.Server.Repositories
{
    public class CardInMemory : ICardRepository
    {
        private static Dictionary<string, Card> cardsInMemory;

        static CardInMemory()
        {
            cardsInMemory = new Dictionary<string, Card>();
        }

        public async Task<List<Card>> SearchCards(CardSearchRequest request)
        {
            return cardsInMemory.ToList();
        }

        public async Task<Card> AddCard(CardAddRequest request)
        {
            string cardId = Guid.NewGuid().ToString();

            Card card = new Card
            {
                Id = cardId,
                FlavorText = request.FlavorText,
                Name = request.Name,
                PPCost = request.PPCost
            };

            cardsInMemory.TryAdd(cardId, card);

            return card;
        }
    }
}