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
            string item1Id = Guid.NewGuid().ToString();
            string item2Id = Guid.NewGuid().ToString();
            string item3Id = Guid.NewGuid().ToString();
            cardsInMemory = new Dictionary<string, Card>();
            cardsInMemory.TryAdd(item1Id, new Card
            {
                Id = item1Id,
                FlavorText = "Foobar",
                Name = "Water Fairy",
                ArtPath = "https://svgdb.me/assets/cards/en/C_100111010.png",
                PPCost = 1
            });
            cardsInMemory.TryAdd(item2Id, new Card
            {
                Id = item2Id,
                FlavorText = "Foobar",
                Name = "Biofabrication",
                ArtPath = "https://svgdb.me/assets/cards/en/C_107834020.png",
                PPCost = 0
            });
            cardsInMemory.TryAdd(item3Id, new Card
            {
                Id = item3Id,
                FlavorText = "Foobar",
                Name = "Everlasting Castle",
                ArtPath = "https://svgdb.me/assets/cards/en/C_113242010.png",
                PPCost = 0
            });
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
                PPCost = request.PPCost,
                ArtPath = request.ArtPath
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