using System.ComponentModel;

namespace SV.Server.Controllers.Models
{
    public enum RarityType
    {
        [Description("Bronze")]
        Bronze,

        [Description("Silver")]
        Silver,

        [Description("Gold")]
        Gold,

        [Description("Legendary")]
        Legendary
    }
}