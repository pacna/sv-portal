using System.ComponentModel.DataAnnotations.Schema;

namespace SV.Server.Contexts
{

    [Table("evo", Schema = "sv_portal")]
    public class Evo
    {
        [Column(name: "evo_id")]
        public string EvoId { get; set; }

        [Column(name: "ability_description")]
        public string AbilityDescription { get; set; }

        [Column(name: "art_location")]
        public string ArtLocation { get; set; }

        [Column(name: "flavor_description")]
        public string FlavorDescription { get; set; }

        [Column(name: "is_evo")]
        public bool IsEvo { get; set; }

        [Column(name: "card_id")]
        public string CardId { get; set; }
    }
}