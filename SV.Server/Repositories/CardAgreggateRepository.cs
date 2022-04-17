using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using SV.Server.Contexts;
using SV.Server.Repositories.Models;

namespace SV.Server.Repositories
{
    internal class CardAggregateRepository
    {
        CardAggregateQueryBuilder _queryBuilder;

        public CardAggregateRepository(SVPortalContext context)
        {
            this._queryBuilder = new(context: context);
        }

        public async Task<List<CardDoc>> SearchCardsAsync()
        {
            List<CardDoc> cards = new List<CardDoc>();

            await foreach (var card in this._queryBuilder.BuildSearchQuery().AsAsyncEnumerable())
            {
                cards.Add(card.ToDataLayer());
            }

            return cards;
        }

        public async Task<CardDoc> GetCardAsync(string id)
        {
            CardDoc card = await this._queryBuilder.BuildGetQuery(id: id).FirstOrDefaultAsync();

            return card;
            // if (card == null)
            // {
            //     return null;
            // }

            // List<string> audioLocations = await this._queryBuilder.BuildAudioGetQuery(cardId: id).ToListAsync();

            // return new CardDoc
            // {
            //     Id = card.CardId,
            //     AudioLocations = audioLocations,
            //     Rarity = card.Rarity,
            //     Craft = card.Craft,
            //     Type = card.Type,
            //     Name = card.Name
            // };
        }
    }
}