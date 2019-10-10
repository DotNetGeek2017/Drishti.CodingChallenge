using Microsoft.AspNetCore.Mvc;
using Restaurant.Api.Attributes;

namespace Restaurant.Api.Controllers
{
    [ServiceFilter(typeof(ExceptionActionFilterAttribute))]
    [Produces("application/json")]
    public abstract class BaseController : Controller
    {
    }
}
