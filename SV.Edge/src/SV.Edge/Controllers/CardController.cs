using Microsoft.AspNetCore.Mvc;
using SV.Edge.Controllers.Models;
using SV.Edge.Services;

namespace SV.Edge.Controllers;

[Route("cards")]
public class CardController : BaseController
{
    private readonly ICardService _service;

    public CardController(ICardService service)
    {
        this._service = service;
    }

    [HttpGet]
    [ProducesResponseType(statusCode: StatusCodes.Status200OK, Type = typeof(List<CardResponse>))]
    [ProducesResponseType(statusCode: StatusCodes.Status404NotFound)]
    public async Task<IActionResult> SearchCardsAsync([FromQuery] CardSearchRequest request)
    {
        return this.OkIfFound(await this._service.SearchCardsAsync(request.ToRequest()));
    }

    [HttpGet("{id}")]
    [ProducesResponseType(statusCode: StatusCodes.Status200OK, Type = typeof(CardDetailResponse))]
    [ProducesResponseType(statusCode: StatusCodes.Status404NotFound)]
    public async Task<IActionResult> GetCardAsync([FromRoute] string id)
    {
        return this.OkIfFound(await this._service.GetCardAsync(id: id));
    }

    [HttpPost]
    [ProducesResponseType(statusCode: StatusCodes.Status200OK, Type = typeof(CardResponse))]
    [ProducesResponseType(statusCode: StatusCodes.Status404NotFound)]
    public async Task<IActionResult> AddCardAsync([FromBody] CardPostRequest request)
    {
        return this.OkIfFound(await this._service.AddCardAsync(request.ToRequest()));
    }

    [HttpPut("{id}")]
    [ProducesResponseType(statusCode: StatusCodes.Status200OK, Type = typeof(CardResponse))]
    [ProducesResponseType(statusCode: StatusCodes.Status404NotFound)]
    public async Task<IActionResult> UpdateCardAsync([FromRoute] string id, [FromBody] CardPutRequest request)
    {
        return this.OkIfFound(await this._service.UpdateCardAsync(id: id, request: request.ToRequest()));
    }

    [HttpDelete("{id}")]
    [ProducesResponseType(statusCode: StatusCodes.Status204NoContent)]
    public async Task<IActionResult> RemoveCardAsync([FromRoute] string id)
    {
        await this._service.RemoveCardAsync(id: id);
        return this.NoContent();
    }
}