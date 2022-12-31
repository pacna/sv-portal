using SV.Edge.Services.Models;

namespace SV.Edge.Controllers.Models;
public interface ICardPostPutBaseRequest
{
    string Name { get; init; }

    int PPCost { get; init; }

    List<string> AudioLocations { get; init; }

    EvoSpecs BaseEvo { get; init; }

    EvoSpecs Evolved { get; init; }
}