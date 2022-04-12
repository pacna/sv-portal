using System.ComponentModel.DataAnnotations.Schema;

namespace SV.Server.Contexts
{
    [Table("battle_stats", Schema = "sv_portal")]
    public class BattleStats
    {
        [Column(name: "battle_stats_id")]
        public string BattleStatsId { get; set; }

        [Column(name: "atk")]
        public int Atk { get; set; }

        [Column(name: "def")]
        public int Def { get; set; }

        [Column(name: "evo_id")]
        public string EvoId { get; set; }
    }
}