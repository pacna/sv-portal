using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using SV.Edge.Services.Models;

namespace SV.Edge.Controllers.Models
{
    public class CardPutRequest : ICardPostPutBaseRequest
    {
        [Required]
        public string Name { get; init; }

        public int PPCost { get; init; }

        public List<string> AudioLocations { get; init; }

        [Required]
        public EvoSpecs BaseEvo { get; init; }

        public EvoSpecs Evolved { get; init; }
    }
}