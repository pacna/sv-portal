using SV.Edge.Services.Constants;

namespace SV.Edge.Services.Models;
public class UpdateCardRequest
{
    public string Name { get; init; }
    public int PPCost { get; init; }
    public List<string> AudioLocations { get; init; }
    public EvoSpecs BaseEvo { get; init; }
    public EvoSpecs Evolved { get; init; }
    public RarityType Rarity { get; set; }
    public CraftType Craft { get; set; }
    public CardType Type { get; set; }

    internal void ThrowIfInvalid(CardType cardType)
    {
        if (this.BaseEvo == null)
            throw new HttpException(statusCode: HttpStatusCode.PreconditionFailed, $"{nameof(this.BaseEvo)} is required");

        if (cardType == CardType.Follower && Evolved == null)
            throw new HttpException(statusCode: HttpStatusCode.PreconditionFailed, $"{nameof(this.Evolved)} is required");

        if (cardType == CardType.Follower && this.AudioLocations.IsNullOrEmpty())
            throw new HttpException(statusCode: HttpStatusCode.PreconditionFailed, $"{nameof(this.AudioLocations)} is required");
    }
}