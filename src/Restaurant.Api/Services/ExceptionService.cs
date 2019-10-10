using System;
using Microsoft.AspNetCore.Routing;

namespace Restaurant.Api.Services
{
    public class ExceptionService : IExceptionService
    {
        public UnhandledException GetUnhandledException(RouteData routeData, Exception ex)
        {
            string actionName = string.Empty;
            string controllerName = string.Empty;

            if (routeData.Values.ContainsKey("action"))
                actionName = routeData.Values["action"].ToString();

            if (routeData.Values.ContainsKey("controller"))
                controllerName = routeData.Values["controller"].ToString();

            return new UnhandledException
            {
                ActionName = actionName,
                ControllerName = controllerName,
                StackTrace = ex == null ? string.Empty : ex.ToString(),
                Guid = Guid.NewGuid().ToString()
            };
        }
    }

    public interface IExceptionService
    {
        UnhandledException GetUnhandledException(RouteData routeData, Exception ex);
    }

    public class UnhandledException
    {
        public string ActionName { get; set; }
        public string ControllerName { get; set; }

        public string Data { get; set; }

        public string Guid { get; set; }

        public string StackTrace { get; set; }
    }
}
