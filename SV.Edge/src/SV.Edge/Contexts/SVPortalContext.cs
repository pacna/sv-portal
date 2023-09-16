using Microsoft.EntityFrameworkCore;
using SV.Edge.Contexts.Documents;

namespace SV.Edge.Contexts;

public class SVPortalContext : DbContext
{
    public SVPortalContext(DbContextOptions<SVPortalContext> options) : base(options: options)
    {
    }

    public DbSet<AudioDocument> Audios { get; set; }
    public DbSet<BattleStatsDocument> BattleStats { get; set; }
    public DbSet<CardDocument> Cards { get; set; }
    public DbSet<EvoDocument> Evos { get; set; }
}