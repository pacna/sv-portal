using System.Collections.Generic;
using SV.Server.Controllers.Models;
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
            return new CardResponse
            {
                Id = card.Id,
                FlavorText = card.FlavorText,
                Name = card.Name,
                PPCost = card.PPCost
            };
        }
    }
}