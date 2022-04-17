using System.Collections.Generic;
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

        public Task<CardDoc> GetCardAsync(string id)
        {
            return this._queryBuilder.BuildGetQuery(id: id).FirstOrDefaultAsync();
        }
    }
}