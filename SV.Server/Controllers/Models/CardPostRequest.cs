using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using SV.Server.Services.Constants;
using SV.Server.Services.Models;

namespace SV.Server.Controllers.Models
{
    public class CardPostRequest
    {
        [Required]
        public CraftType Craft { get; init; }

        [Required]
        public string Name { get; init; }

        [Required]
        public string Pack { get; init; }

        [Required]
        public int PPCost { get; init; }

        [Required]
        public RarityType Rarity { get; init; }

        [Required]
        public CardType Type { get; init; }

        public List<string> AudioLocations { get; init; }

        [Required]
        public EvoFollowerSpecs BaseEvo { get; init; }

        public EvoFollowerSpecs Evolved { get; init; }

        public AddCardRequest ToRequest()
        {
            return new AddCardRequest
            {
                Craft = this.Craft,
                Name = this.Name,
                Pack = this.Pack,
                PPCost = this.PPCost,
                Rarity = this.Rarity,
                Type = this.Type,
                AudioLocations = this.AudioLocations,
                BaseEvo = this.BaseEvo,
                Evolved = this.Evolved
            };
        }
    }
}