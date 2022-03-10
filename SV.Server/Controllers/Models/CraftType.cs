using System.ComponentModel;

namespace SV.Server.Controllers.Models
{
    public enum CraftType
    {
        [Description("Forestcraft")]
        Forestcraft,

        [Description("Swordcraft")]
        Swordcraft,

        [Description("Runecraft")]
        Runecraft,

        [Description("Dragoncraft")]
        Dragoncraft,

        [Description("Shadowcraft")]
        Shadowcraft,

        [Description("Bloodcraft")]
        Bloodcraft,

        [Description("Havencraft")]
        Havencraft,

        [Description("Portalcraft")]
        Portalcraft,

        [Description("Neutral")]
        Neutral
    }
}