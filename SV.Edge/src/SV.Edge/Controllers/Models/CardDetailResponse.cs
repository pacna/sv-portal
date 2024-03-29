using SV.Edge.Services.Models;

namespace SV.Edge.Controllers.Models;

public class CardDetailResponse : CardResponse
{
    public string AbilityText { get; init; }
    public IList<string> AudioLocations { get; init; }
    public BattleStats BattleStats { get; init; }
    public string CardPack { get; init; }
    public EvoSpecs Evo { get; init; }
    public string FlavorText { get; init; }
    public int PPCost { get; init; }
}