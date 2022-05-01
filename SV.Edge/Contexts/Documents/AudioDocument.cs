using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SV.Edge.Contexts.Documents
{
    [Table("audio", Schema = "sv_portal")]
    public class AudioDocument
    {
        public AudioDocument()
        {
        }

        public AudioDocument(string cardId)
        {
            this.CardId = cardId;
        }

        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity), Column(name: "audio_id")]
        public string AudioId { get; set; }

        [Column(name: "location")]
        public string Location { get; set; }

        [Column(name: "card_id")]
        public string CardId { get; set; }
    }
}