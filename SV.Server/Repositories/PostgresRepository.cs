using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using SV.Server.Contexts;

namespace SV.Server.Repositories
{
    public class PostgresRepository
    {
        IQueryable<Card> _queryableCard;

        public PostgresRepository(SVPortalContext context)
        {
            this._queryableCard = context.Cards.AsQueryable<Card>();
        }

        public Task<List<Card>> SearchCards()
        {
            return this._queryableCard.ToListAsync();
        }
    }
}