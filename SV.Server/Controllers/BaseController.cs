using Microsoft.AspNetCore.Mvc;

namespace SV.Server.Controllers
{
    public class BaseController: ControllerBase
    {
        [ApiExplorerSettings(IgnoreApi = true)]
        public IActionResult OkIfFound<TResult>(TResult result)
        {
            return result == null ?
                this.NotFound() :
                this.Ok(result);
        }
    }
}