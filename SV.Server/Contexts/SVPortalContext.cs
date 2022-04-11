using Microsoft.EntityFrameworkCore;

namespace SV.Server.Contexts
{
    public class SVPortalContext : DbContext
    {
        public SVPortalContext(DbContextOptions<SVPortalContext> options) : base(options: options)
        {
        }

        public DbSet<Card> Cards { get; set; }
    }
}