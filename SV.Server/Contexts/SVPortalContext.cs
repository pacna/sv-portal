using Microsoft.EntityFrameworkCore;

namespace SV.Server.Contexts
{
    public class SVPortalContext : DbContext
    {
        public SVPortalContext(DbContextOptions<SVPortalContext> options) : base(options: options)
        {
        }

        public DbSet<Audio> Audios { get; set; }
        public DbSet<BattleStats> BattleStats { get; set; }
        public DbSet<Card> Cards { get; set; }
        public DbSet<Evo> Evos { get; set; }
    }
}