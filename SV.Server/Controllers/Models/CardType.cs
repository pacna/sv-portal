using System.ComponentModel;

namespace SV.Server.Controllers.Models
{
    public enum CardType
    {
        [Description("Follower")]
        Follower,

        [Description("Spell")]
        Spell,

        [Description("Amulet")]
        Amulet
    }
}