using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using SV.Server.Contexts;
using SV.Server.Repositories.Models;
using SV.Server.Services.Models;

namespace SV.Server.Repositories
{
    internal class CardAggregateRepository
    {
        private readonly CardAggregateQueryBuilder _queryBuilder;

        public CardAggregateRepository(SVPortalContext context)
        {
            this._queryBuilder = new(context: context);
        }

        public Task<List<Card>> SearchCardsAsync(SearchCardRequest request)
        {
            return this._queryBuilder.BuildSearchQuery(request).ToListAsync();
        }

        public Task<Card> GetCardAsync(string id)
        {
            return this._queryBuilder.BuildGetQuery(id: id).FirstOrDefaultAsync();
        }
    }
}