using System;
using System.Net;
using System.Collections.Generic;
using SV.Server.Controllers.Models;
using SV.Server.Services.Constants;

namespace SV.Server.Services.Models
{
    public class AddCardRequest
    {
        public CraftType Craft { get; init; }
        public string Name { get; init; }
        public string Pack { get; init; }
        public int PPCost { get; init; }
        public RarityType Rarity { get; init; }
        public CardType Type { get; init; }
        public List<string> AudioLocations { get; init; }
        public EvoFollowerSpecs BaseEvo { get; init; }
        public EvoFollowerSpecs Evolved { get; init; }

        public void ThrowIfInvalid()
        {
            if (this.BaseEvo == null)
            {
                throw new HttpException(statusCode: HttpStatusCode.PreconditionFailed, $"{nameof(this.BaseEvo)} is required");
            }

            if (this.Type == CardType.Follower && Evolved == null)
            {
                throw new HttpException(statusCode: HttpStatusCode.PreconditionFailed, $"{nameof(this.Evolved)} is required");
            }

            if (this.Type == CardType.Follower && this.AudioLocations.IsNullOrEmpty())
            {
                throw new HttpException(statusCode: HttpStatusCode.PreconditionFailed, $"{nameof(this.AudioLocations)} is required");
            }
        }
    }
}