using System.Collections.Generic;
using System.Linq;
using SV.Server.Repositories.Models;

namespace SV.Server.Repositories
{
    public static class CardExtension
    {
        public static List<Card> ToList(this Dictionary<string, Card> cards)
        {
            return cards.Values.ToList();
        }
    }
}