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
        [ProducesResponseType(statusCode: StatusCodes.Status200OK, Type = typeof(CardResponse))]
        public async Task<IActionResult> SearchCards([FromQuery] CardSearchRequest request)
        {
            return this.Ok(await this._service.SearchCards(request));
        }

        [HttpGet("{id}")]
        [ProducesResponseType(statusCode: StatusCodes.Status200OK, Type = typeof(CardResponse))]
        public async Task<IActionResult> GetCard([FromRoute] string id)
        {
            return this.Ok(id);
        }

        [HttpPost]
        [ProducesResponseType(statusCode: StatusCodes.Status201Created)]
        public async Task<IActionResult> AddCard([FromBody] CardAddRequest request)
        {
            return this.Ok("Success");
        }

        [HttpPut]
        [ProducesResponseType(statusCode: StatusCodes.Status204NoContent)]
        public async Task<IActionResult> UpdateCard([FromBody] CardUpdateRequest request)
        {
            return this.Ok("Success");
        }

        [HttpDelete]
        [ProducesResponseType(statusCode: StatusCodes.Status204NoContent)]
        public async Task<IActionResult> DeleteCard([FromRoute] string id)
        {
            return this.Ok("Success");
        }
    }
}