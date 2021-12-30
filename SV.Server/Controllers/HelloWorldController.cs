using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace SV.Server.Controllers
{

  [Route("hello-world")]
  public class HelloWorldController : ControllerBase
  {
    [HttpGet]
    public async Task<IActionResult> Get()
    {
      return this.Ok("Hello World");
    }
  }
}