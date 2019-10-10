using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Restaurant.Api.Services;

namespace Restaurant.Api.Attributes
{
    public class ExceptionActionFilterAttribute : ExceptionFilterAttribute
    {
        private readonly ILogger _logger;
        private readonly IExceptionService _exceptionService;
        public ExceptionActionFilterAttribute(ILoggerFactory loggerFactory, IExceptionService exceptionService)
        {
            _logger = loggerFactory.CreateLogger<ExceptionActionFilterAttribute>();
            _exceptionService = exceptionService;
        }

        public override void OnException(ExceptionContext context)
        {
            var unhandledException = _exceptionService.GetUnhandledException(context.RouteData, context.Exception);

            _logger.LogError("Unhandled exception whilst executing the action", JsonConvert.SerializeObject(unhandledException));

            context.ExceptionHandled = false;
            context.HttpContext.Response.Clear();

            var objectResult = new JsonResult(unhandledException)
            {
                StatusCode = (int)HttpStatusCode.InternalServerError
            };
            context.Result = objectResult;
        }

        public override async Task OnExceptionAsync(ExceptionContext context)
        {
            await Task.Run(() =>
            {
                OnException(context);
            });
        }
    }

}
