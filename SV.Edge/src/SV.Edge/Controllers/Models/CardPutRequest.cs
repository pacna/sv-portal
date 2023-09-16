using SV.Edge.Services.Models;

namespace SV.Edge.Controllers.Models;

public class CardPutRequest : ICardPostPutBaseRequest
{
    [Required]
    public string Name { get; init; }

    public int PPCost { get; init; }

    public List<string> AudioLocations { get; init; }

    [Required]
    public EvoSpecs BaseEvo { get; init; }

    public EvoSpecs Evolved { get; init; }

    internal UpdateCardRequest ToRequest()
    {
        return new UpdateCardRequest
        {
            Name = this.Name,
            PPCost = this.PPCost,
            AudioLocations = this.AudioLocations,
            BaseEvo = this.BaseEvo,
            Evolved = this.Evolved
        };
    }
}