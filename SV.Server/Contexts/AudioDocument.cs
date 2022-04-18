using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SV.Server.Contexts
{
    [Table("audio", Schema = "sv_portal")]
    public class AudioDocument
    {
        [Key]
        [Column(name: "audio_id")]
        public string AudioId { get; set; }

        [Column(name: "location")]
        public string Location { get; set; }

        [Column(name: "card_id")]
        public string CardId { get; set; }
    }
}