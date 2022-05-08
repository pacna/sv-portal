using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using SV.Edge.Controllers.Attributes;
using SV.Edge.Services.Constants;
using SV.Edge.Services.Models;

namespace SV.Edge.Controllers.Models
{
    public class CardPostRequest: ICardPostPutBaseRequest
    {
        [Required, ValidEnum(typeof(CraftType?))]
        public CraftType? Craft { get; init; }

        [Required]
        public string Name { get; init; }

        [Required, ValidCardPack]
        public string Pack { get; init; }

        [Required]
        public int PPCost { get; init; }

        [Required, ValidEnum(typeof(RarityType?))]
        public RarityType? Rarity { get; init; }

        [Required, ValidEnum(typeof(CardType?))]
        public CardType? Type { get; init; }

        public List<string> AudioLocations { get; init; }

        [Required]
        public EvoSpecs BaseEvo { get; init; }

        public EvoSpecs Evolved { get; init; }

        public AddCardRequest ToRequest()
        {
            return new AddCardRequest
            {
                Craft = this.Craft.GetValueOrDefault(),
                Name = this.Name,
                Pack = this.Pack,
                PPCost = this.PPCost,
                Rarity = this.Rarity.GetValueOrDefault(),
                Type = this.Type.GetValueOrDefault(),
                AudioLocations = this.AudioLocations,
                BaseEvo = this.BaseEvo,
                Evolved = this.Evolved
            };
        }
    }
}