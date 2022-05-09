using System.Collections.Generic;
using System.Linq;
using SV.Edge.Contexts.Documents;
using SV.Edge.Repositories.Models;
using SV.Edge.Services.Models;

namespace SV.Edge.Repositories
{
    internal static class CardAggregateExtensions
    {
        public static IEnumerable<AudioDocument> ToEnumerable(this List<AudioDocument> audios, string cardId)
        {
            return audios.IsNullOrEmpty()
                ? Enumerable.Empty<AudioDocument>()
                : audios.Select(x => new AudioDocument(cardId: cardId)
                {
                    Location = x.Location
                });
        }

        public static IEnumerable<AudioDocument> ToEnumerable(this List<string> audios, string cardId)
        {
            return audios.IsNullOrEmpty()
                ? Enumerable.Empty<AudioDocument>()
                : audios.Select(x => new AudioDocument(cardId: cardId)
                {
                    Location = x
                });
        }

        public static EvoDocument ToDocument(this EvoDocument evo, string cardId)
        {
            return evo == null
                ? null
                : new EvoDocument(cardId: cardId)
                {
                    AbilityText = evo.AbilityText,
                    ArtLocation = evo.ArtLocation,
                    FlavorText = evo.FlavorText,
                    IsEvo = evo.IsEvo
                };
        }

        public static EvoDocument ToDocument(this Card card, bool isEvo)
        {
            return new EvoDocument
            {
                AbilityText = card.AbilityText,
                ArtLocation = card.ArtLocation,
                FlavorText = card.FlavorText,
                IsEvo = isEvo
            };
        }

        public static EvoDocument ToDocument(this EvoSpecs evo, bool isEvo)
        {
            return evo == null
                ? null
                : new EvoDocument
                {
                    AbilityText = evo.AbilityText,
                    ArtLocation = evo.ArtLocation,
                    FlavorText = evo.FlavorText,
                    IsEvo = isEvo
                };
        }

        public static BattleStatsDocument ToDocument(this BattleStats battleStats)
        {
            return battleStats == null
                ? null
                : new BattleStatsDocument
                {
                    Atk = battleStats.Atk,
                    Def = battleStats.Def
                };
        }

        public static BattleStatsDocument ToDocument(this BattleStatsDocument battleStats, string evoId)
        {
            return new BattleStatsDocument(evoId: evoId)
            {
                Atk = battleStats.Atk,
                Def = battleStats.Def
            };
        }

        public static CardDocument ToDocument(this Card card)
        {
            return new CardDocument
            {
                CardPack = card.CardPack,
                Craft = card.Craft,
                Name = card.Name,
                PPCost = card.PPCost,
                Rarity = card.Rarity,
                Type = card.Type
            };
        }

        public static List<AudioDocument> ToList(this List<string> audios)
        {
            return audios.IsNullOrEmpty() 
                ? null
                : audios.ConvertAll(x => new AudioDocument
                {
                    Location = x
                });
        }
    }
}