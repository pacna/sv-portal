using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SV.Server.Controllers.Models;
using SV.Server.Repositories.Models;
using SV.Server.Services.Constants;
using SV.Server.Services.Models;

namespace SV.Server.Repositories
{
    internal class CardInMemoryRepository : ICardRepository
    {
        private static Dictionary<string, Card> cardsInMemory;

        static CardInMemoryRepository()
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
                AbilityText = "Last Words: Put a Fairy into your hand.",
                ArtLocation = "https://svgdb.me/assets/cards/en/C_100111010.png",
                AudioLocations = new List<string>
                {
                    "https://svgdb.me/assets/audio/en/vo_100111010_1.mp3",
                    "https://svgdb.me/assets/audio/en/vo_100111010_2.mp3"
                },
                BattleStats = new BattleStats
                {
                    Atk = 1,
                    Def = 1
                },
                CardPack = CardPackType.Basic,
                Craft = CraftType.Forestcraft,
                Evo = new EvoFollowerSpecs
                {
                    AbilityText = "(Same as the unevolved form.)",
                    ArtLocation = "https://svgdb.me/assets/cards/en/E_100111010.png",
                    FlavorText = "If you try and hurt me, we'll make you regret it. But if you're a good friend, the fairies won't forget it!",
                    BattleStats = new BattleStats
                    {
                        Atk = 3,
                        Def = 3
                    }
                },
                FlavorText = "Fairies get lonely, so we always stick together. If you hurt me, they won't be pleased!",
                Id = item1Id,
                Name = "Water Fairy",
                PPCost = 1,
                Rarity = RarityType.Bronze,
                Type = CardType.Follower
            });
            cardsInMemory.TryAdd(item2Id, new Card
            {
                AbilityText = "At the end of this turn, if at least 4 cards were played this turn, draw a card and give +1/+1 to all allied followers.<br>If at least 8 cards were played, draw 2 cards and give +2/+2 instead.",
                ArtLocation = "https://svgdb.me/assets/cards/en/C_121134010.png",
                Craft = CraftType.Forestcraft,
                FlavorText = "The people called him a hero—one who'd brought peace to Isunia with a blade of justice. Setus bore this as stoically as he would any other burden.\"With the Moon Corps—no, Countersolari—at our side, Isunia will know true justice.\" —Tales from Isunia, Entry 7",
                Id = item2Id,
                Name = "Heroic Resolve",
                PPCost = 1,
                Rarity = RarityType.Gold,
                Type = CardType.Spell
            });
            cardsInMemory.TryAdd(item3Id, new Card
            {
                AbilityText = "Fusion: Fairies<br>----------<br>Countdown (3)<br>At the end of your turn, activate 1 of the following effects in order. If this amulet is fused with at least 1 card, activate 2 effects instead.<br>1. Draw a card.<br>2. Summon a Fairy and give it Ward.<br>3. Restore 2 defense to your leader.",
                ArtLocation = "https://svgdb.me/assets/cards/en/C_120123010.png",
                Craft = CraftType.Forestcraft,
                FlavorText = "\"Hey, what do you think this tree is here for?\"<br>\"I dunno—it's a tree. Leave the philosophical stuff for the humans. That's what they do best.\"<br>—Fairies",
                Id = item3Id,
                Name = "Tree of Wonders",
                PPCost = 2,
                Rarity = RarityType.Silver,
                Type = CardType.Amulet
            });
            cardsInMemory.TryAdd(item4Id, new Card
            {
                AbilityText = "Storm.",
                ArtLocation = "https://svgdb.me/assets/cards/en/C_100211010.png",
                AudioLocations = new List<string>
                {
                    "https://svgdb.me/assets/audio/en/vo_100211010_1.mp3"
                },
                BattleStats = new BattleStats
                {
                    Atk = 1,
                    Def = 1
                },
                CardPack = CardPackType.Basic,
                Craft = CraftType.Swordcraft,
                Evo = new EvoFollowerSpecs
                {
                    AbilityText = "(Same as the unevolved form.)",
                    ArtLocation = "https://svgdb.me/assets/cards/en/E_100211010.png",
                    FlavorText = "You didn't seriously think surrounding me was gonna work, did you? I got news for you then—this next part isn't gonna go well for you either.",
                    BattleStats = new BattleStats
                    {
                        Atk = 3,
                        Def = 3
                    }
                },
                FlavorText = "Let's speed things up! I ain't got all day to wait for you to get good.",
                Id = item4Id,
                Name = "Quickblader",
                PPCost = 1,
                Rarity = RarityType.Bronze,
                Type = CardType.Follower
            });
            cardsInMemory.TryAdd(item5Id, new Card
            {
                AbilityText = "Put a random Swordcraft follower from your deck into your hand. Then, if there are any Natura cards in your hand, put a Naterran Great Tree into your hand.Rally(7): Recover 1 play point.",
                ArtLocation = "https://svgdb.me/assets/cards/en/C_121234010.png",
                Craft = CraftType.Swordcraft,
                FlavorText = "\"A friendly bout may tell us what we want to know about each other!\" The princess's offering releases the lonely girl from her pain—her first gift from her first friend. The Boneclaw dies, and the proud Stoneclaw takes her first steps. —Tales from Naterra, Entry 3",
                Id = item5Id,
                Name = "Sunny Day Encounter",
                PPCost = 1,
                Rarity = RarityType.Gold,
                Type = CardType.Spell
            });
            cardsInMemory.TryAdd(item6Id, new Card
            {
                AbilityText = "Fanfare: Give +1/+0 to all allied Officer followers. Whenever an allied Officer follower comes into play, give it + 1 / +0.",
                ArtLocation = "https://svgdb.me/assets/cards/en/C_100222010.png",
                Craft = CraftType.Swordcraft,
                FlavorText = "All who dare speak ill of our flag are traitors!",
                Id = item6Id,
                Name = "Royal Banner",
                PPCost = 4,
                Rarity = RarityType.Silver,
                Type = CardType.Amulet
            });
        }

        public Task<List<Card>> SearchCardsAsync(SearchCardRequest request)
        {
            IEnumerable<Card> cardList = cardsInMemory.ToList();

            if (request.Craft.HasValue)
            {
                cardList = cardList.Where(x => x.Craft == request.Craft.Value);
            }

            if (!string.IsNullOrEmpty(request.Name))
            {
                cardList = cardList.Where(x => x.Name.Contains(request.Name, StringComparison.InvariantCultureIgnoreCase));
            }

            if (!request.Rarities.IsNullOrEmpty())
            {
                cardList = cardList.Where(x => request.Rarities.Contains((RarityType)x.Rarity));
            }

            if (!request.Types.IsNullOrEmpty())
            {
                cardList = cardList.Where(x => request.Types.Contains(x.Type));
            }

            return Task.FromResult<List<Card>>(cardList.ToList());
        }

        public Task<Card> GetCardAsync(string id)
        {
            cardsInMemory.TryGetValue(id, out Card card);

            if (card == null)
            {
                return Task.FromResult<Card>(null);
            }

            return Task.FromResult<Card>(card);
        }

        public Task<Card> AddCardAsync(Card card)
        {
            string id = Guid.NewGuid().ToString();
            card.Id = id;

            cardsInMemory.TryAdd(id, card);

            return Task.FromResult<Card>(card);
        }

        public Task UpdateCardAsync(string id, CardPutRequest request)
        {
            cardsInMemory.TryGetValue(id, out Card cardBeforeUpdate);

            if (cardBeforeUpdate == null)
            {
                return Task.CompletedTask;
            }

            cardsInMemory[id] = new Card
            {
                Id = id,
                FlavorText = request.FlavorText ?? cardBeforeUpdate.FlavorText,
                Name = cardBeforeUpdate.Name,
                PPCost = cardBeforeUpdate.PPCost
            };

            return Task.CompletedTask;
        }

        public Task RemoveCardAsync(string id)
        {
            cardsInMemory.Remove(id);
            return Task.CompletedTask;
        }
    }
}