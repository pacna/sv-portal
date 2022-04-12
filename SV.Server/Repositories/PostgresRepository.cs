using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using SV.Server.Contexts;
using SV.Server.Repositories.Models;

namespace SV.Server.Repositories
{
    public class PostgresRepository
    {
        IQueryable<Audio> _queryableAudio;
        IQueryable<BattleStats> _queryableBattleStats;
        IQueryable<Card> _queryableCard;
        IQueryable<Evo> _queryableEvo;

        SVPortalContext _context;

        public PostgresRepository(SVPortalContext context)
        {
            this._context = context;
            this._queryableAudio = context.Audios.AsQueryable<Audio>();
            this._queryableBattleStats = context.BattleStats.AsQueryable<BattleStats>();
            this._queryableCard = context.Cards.AsQueryable<Card>();
            this._queryableEvo = context.Evos.AsQueryable<Evo>();
        }

        public Task<List<CardDoc>> SearchCards()
        {
            return this._queryableCard.Join(
                this._queryableEvo,
                card => card.CardId,
                evo => evo.CardId,
                (card, evo) => new CardDoc
                {
                    Id = card.CardId,
                    ArtLocation = evo.ArtLocation,
                    Craft = card.Craft,
                    Name = card.Name,
                    IsEvo = evo.IsEvo
                }).Where(x => !x.IsEvo).ToListAsync();
        }
    }
}