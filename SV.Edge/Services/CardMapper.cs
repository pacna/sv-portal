using System.Collections.Generic;
using SV.Edge.Controllers.Models;
using SV.Edge.Repositories.Models;
using SV.Edge.Services.Models;

namespace SV.Edge.Services
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

        public static Card Map(AddCardRequest request)
        {
            return new Card
            {
                AbilityText = request.BaseEvo.AbilityText,
                ArtLocation = request.BaseEvo.ArtLocation,
                AudioLocations = request.AudioLocations,
                BattleStats = request.BaseEvo.BattleStats,
                CardPack = request.Pack,
                Craft = request.Craft,
                Evo = request.Evolved,
                FlavorText = request.BaseEvo.FlavorText,
                Name = request.Name,
                PPCost = request.PPCost,
                Rarity = request.Rarity,
                Type = request.Type
            };   
        }
    }
}