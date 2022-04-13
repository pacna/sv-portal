using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SV.Server.Controllers.Models;
using SV.Server.Services;

namespace SV.Server.Controllers
{

    [Route("cards")]
    public class CardController : ControllerBase
    {
        private readonly ICardService _service;

        public CardController(ICardService service)
        {
            this._service = service;
        }

        [HttpGet]
        [ProducesResponseType(statusCode: StatusCodes.Status200OK, Type = typeof(List<CardResponse>))]
        public async Task<IActionResult> SearchCards([FromQuery] CardSearchRequest request)
        {
            return this.Ok(await this._service.SearchCardsAsync(request));
        }

        [HttpGet("{id}")]
        [ProducesResponseType(statusCode: StatusCodes.Status200OK, Type = typeof(CardDetailResponse))]
        public async Task<IActionResult> GetCard([FromRoute] string id)
        {
            return this.Ok(await this._service.GetCardAsync(id: id));
        }

        [HttpPost]
        [ProducesResponseType(statusCode: StatusCodes.Status200OK, Type = typeof(CardResponse))]
        public async Task<IActionResult> AddCard([FromBody] CardAddRequest request)
        {
            return this.Ok(await this._service.AddCardAsync(request));
        }

        [HttpPut("{id}")]
        [ProducesResponseType(statusCode: StatusCodes.Status204NoContent)]
        public async Task<IActionResult> UpdateCard([FromRoute] string id, [FromBody] CardUpdateRequest request)
        {
            await this._service.UpdateCardAsync(id: id, request: request);
            return this.NoContent();
        }

        [HttpDelete("{id}")]
        [ProducesResponseType(statusCode: StatusCodes.Status204NoContent)]
        public async Task<IActionResult> DeleteCard([FromRoute] string id)
        {
            await this._service.RemoveCardAsync(id: id);
            return this.NoContent();
        }
    }
}