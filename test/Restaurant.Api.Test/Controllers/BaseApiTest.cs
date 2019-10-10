using System;
using System.IO;
using System.Reflection;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.TestHost;
using Microsoft.Extensions.Configuration;

namespace Restaurant.Api.Test.Controllers
{
    public abstract class BaseRestaurantApi : IDisposable
    {
        public TestServer RestaurantApiServer { get; }
        protected BaseRestaurantApi()
        {
            Environment.SetEnvironmentVariable("ASPNETCORE_ENVIRONMENT", "");
            RestaurantApiServer = CreateServer();
        }

        public virtual TestServer CreateServer()
        {
            var path = Assembly.GetAssembly(typeof(BaseRestaurantApi)).Location;


            var hostBuilder = new WebHostBuilder()
                .UseContentRoot(Path.GetDirectoryName(path))
                .ConfigureAppConfiguration((builderContext, config) =>
                {
                    config
                        .AddJsonFile("appsettings.json")
                        .AddEnvironmentVariables();
                })
                .UseStartup<Startup>();

            return new TestServer(hostBuilder);
        }

        public void Dispose()
        {
            RestaurantApiServer?.Dispose();
        }
    }
}
