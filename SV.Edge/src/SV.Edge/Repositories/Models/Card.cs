using SV.Edge.Services.Constants;
using SV.Edge.Services.Models;

namespace SV.Edge.Repositories.Models;
public class Card
{
    public string AbilityText { get; set; }
    public string ArtLocation { get; set; }
    public List<string> AudioLocations { get; set; }
    public BattleStats BattleStats { get; set; }
    public string CardPack { get; set; }
    public CraftType Craft { get; set; }
    public EvoSpecs Evo { get; set; }
    public string FlavorText { get; set; }
    public string Id { get; set; }
    public string Name { get; set; }
    public int PPCost { get; set; }
    public RarityType Rarity { get; set; }
    public CardType Type { get; set; }
}