using System.Collections.Generic;
using SV.Server.Controllers.Models;
using SV.Server.Repositories;
using SV.Server.Repositories.Models;

namespace SV.Server.Services
{
    public static class CardMapper
    {
        public static List<CardResponse> Map(List<Card> cards)
        {
            return cards.ConvertAll<CardResponse>(c => Map(card: c));
        }

        public static CardResponse Map(Card card)
        {
            return card == null
                ? null
                : new CardResponse
                {
                    Id = card.Id,
                    ArtLocation = card?.ArtLocation,
                    Name = card.Name,
                    Craft = card.Craft
                };
        }

        public static CardDetailResponse MapDetailResponse(Card card)
        {
            return card == null
                ? null
                : new CardDetailResponse
                {
                    AbilityText = card.AbilityText,
                    ArtLocation = card.ArtLocation,
                    AudioLocations = card.AudioLocations.IsNullOrEmpty() ? new List<string>() : card.AudioLocations,
                    BattleStats = card.BattleStats,
                    CardPack = card.CardPack,
                    Craft = card.Craft,
                    Evo = card.Evo,
                    FlavorText = card.FlavorText,
                    Id = card.Id,
                    Name = card.Name,
                    PPCost = card.PPCost,
                    Rarity = card.Rarity,
                    Type = card.Type
                };
        }
    }
}