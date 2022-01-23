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

        public async Task<Card> GetCard(string id)
        {
            cardsInMemory.TryGetValue(id, out Card card);

            if (card == null)
            {
                return null;
            }

            return card;
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

        public async Task UpdateCard(string id, CardUpdateRequest request)
        {
            cardsInMemory.TryGetValue(id, out Card cardBeforeUpdate);

            if (cardBeforeUpdate == null)
            {
                return;
            }

            cardsInMemory[id] = new Card
            {
                Id = id,
                FlavorText = request.FlavorText ?? cardBeforeUpdate.FlavorText,
                Name = cardBeforeUpdate.Name,
                PPCost = cardBeforeUpdate.PPCost
            };
        }

        public async Task RemoveCard(string id)
        {
            cardsInMemory.Remove(id);
        }
    }
}