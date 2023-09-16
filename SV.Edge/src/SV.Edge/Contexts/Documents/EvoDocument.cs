using System.ComponentModel.DataAnnotations.Schema;

namespace SV.Edge.Contexts.Documents;

[Table("evo", Schema = "sv_portal")]
public class EvoDocument
{
    public EvoDocument()
    {
    }

    public EvoDocument(string cardId)
    {
        this.CardId = cardId;
    }

    [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity), Column(name: "evo_id")]
    public string EvoId { get; set; }

    [Column(name: "ability_text")]
    public string AbilityText { get; set; }

    [Column(name: "art_location")]
    public string ArtLocation { get; set; }

    [Column(name: "flavor_text")]
    public string FlavorText { get; set; }

    [Column(name: "is_evo")]
    public bool IsEvo { get; set; }

    [Column(name: "card_id")]
    public string CardId { get; set; }
}