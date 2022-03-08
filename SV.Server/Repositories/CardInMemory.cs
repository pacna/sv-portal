using System;
using System.Collections.Generic;
using System.Linq;
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
            string item4Id = Guid.NewGuid().ToString();
            string item5Id = Guid.NewGuid().ToString();
            string item6Id = Guid.NewGuid().ToString();
            cardsInMemory = new Dictionary<string, Card>();
            cardsInMemory.TryAdd(item1Id, new Card
            {
                Id = item1Id,
                FlavorText = "Foobar",
                Name = "Water Fairy",
                ArtLocation = "https://svgdb.me/assets/cards/en/C_100111010.png",
                PPCost = 1,
                Craft = CraftType.Forestcraft
            });
            cardsInMemory.TryAdd(item2Id, new Card
            {
                Id = item2Id,
                FlavorText = "Foobar",
                Name = "Heroic Resolve",
                ArtLocation = "https://svgdb.me/assets/cards/en/C_121134010.png",
                PPCost = 1,
                Craft = CraftType.Forestcraft
            });
            cardsInMemory.TryAdd(item3Id, new Card
            {
                Id = item3Id,
                FlavorText = "Foobar",
                Name = "Tree of Wonders",
                ArtLocation = "https://svgdb.me/assets/cards/en/C_120123010.png",
                PPCost = 2,
                Craft = CraftType.Forestcraft
            });
            cardsInMemory.TryAdd(item4Id, new Card
            {
                Id = item4Id,
                FlavorText = "Foobar",
                Name = "Quickblader",
                ArtLocation = "https://svgdb.me/assets/cards/en/C_100211010.png",
                PPCost = 1,
                Craft = CraftType.Swordcraft
            });
            cardsInMemory.TryAdd(item5Id, new Card
            {
                Id = item5Id,
                FlavorText = "Foobar",
                Name = "Sunny Day Encounter",
                ArtLocation = "https://svgdb.me/assets/cards/en/C_121234010.png",
                PPCost = 1,
                Craft = CraftType.Swordcraft
            });
            cardsInMemory.TryAdd(item6Id, new Card
            {
                Id = item6Id,
                FlavorText = "Foobar",
                Name = "Royal Banner",
                ArtLocation = "https://svgdb.me/assets/cards/en/C_100222010.png",
                PPCost = 4,
                Craft = CraftType.Swordcraft
            });
        }

        public async Task<List<Card>> SearchCards(CardSearchRequest request)
        {
            List<Card> cardList = cardsInMemory.ToList();
            if (request.Craft.HasValue)
            {
                cardList = cardList.Where(x => x.Craft == request.Craft.Value).ToList();
            }

            return cardList;
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
                ArtLocation = request.ArtLocation
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