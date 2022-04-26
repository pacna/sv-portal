using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using SV.Server.Services.Constants;

namespace SV.Server.Contexts
{
    [Table("card", Schema = "sv_portal")]
    public class CardDocument
    {
        [Key]
        [Column(name: "card_id")]
        public string CardId { get; set; }

        [Column(name: "card_pack")]
        public string CardPack { get; set; }

        [Column(name: "craft")]
        public CraftType Craft { get; set; }

        [Column(name: "name")]
        public string Name { get; set; }

        [Column(name: "ppcost")]
        public int PPCost { get; set; }

        [Column(name: "rarity")]
        public RarityType Rarity { get; set; }

        [Column(name: "type")]
        public CardType Type { get; set; }
    }
}