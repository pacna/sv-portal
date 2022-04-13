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

        public Task<List<CardDoc>> SearchCardsAsync()
        {
            return this._queryBuilder.BuildSearchQuery().ToListAsync();
        }

        public async Task<CardDoc> GetCardAsync(string id)
        {
            Card card = await this._queryBuilder.BuildGetQuery(id: id).FirstOrDefaultAsync();

            if (card == null)
            {
                return null;
            }

            List<string> audioLocations = await this._queryBuilder.BuildAudioGetQuery(cardId: id).ToListAsync();

            return new CardDoc
            {
                Id = card.CardId,
                AudioLocations = audioLocations,
                Rarity = card.Rarity,
                Craft = card.Craft,
                Type = card.Type,
                Name = card.Name
            };
        }
    }
}