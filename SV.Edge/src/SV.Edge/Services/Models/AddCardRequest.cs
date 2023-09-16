using SV.Edge.Services.Constants;
using SV.Edge.Repositories.Models;

namespace SV.Edge.Services.Models;

public class AddCardRequest
{
    public CraftType Craft { get; init; }
    public string Name { get; init; }
    public string Pack { get; init; }
    public int PPCost { get; init; }
    public RarityType Rarity { get; init; }
    public CardType Type { get; init; }
    public List<string> AudioLocations { get; init; }
    public EvoSpecs BaseEvo { get; init; }
    public EvoSpecs Evolved { get; init; }

    internal void ThrowIfInvalid()
    {
        if (this.BaseEvo == null)
            throw new HttpException(statusCode: HttpStatusCode.PreconditionFailed, $"{nameof(this.BaseEvo)} is required");

        if (this.Type == CardType.Follower && Evolved == null)
            throw new HttpException(statusCode: HttpStatusCode.PreconditionFailed, $"{nameof(this.Evolved)} is required");

        if (this.Type == CardType.Follower && this.AudioLocations.IsNullOrEmpty())
            throw new HttpException(statusCode: HttpStatusCode.PreconditionFailed, $"{nameof(this.AudioLocations)} is required");
    }

    internal Card ToCard()
    {
        return new Card
        {
            AbilityText = this.BaseEvo.AbilityText,
            ArtLocation = this.BaseEvo.ArtLocation,
            AudioLocations = this.AudioLocations,
            BattleStats = this.BaseEvo.BattleStats,
            CardPack = this.Pack,
            Craft = this.Craft,
            Evo = this.Evolved,
            FlavorText = this.BaseEvo.FlavorText,
            Name = this.Name,
            PPCost = this.PPCost,
            Rarity = this.Rarity,
            Type = this.Type
        };  
    }
}