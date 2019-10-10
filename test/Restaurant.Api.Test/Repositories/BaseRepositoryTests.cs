using System;
using System.Configuration;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Restaurant.Api.Models;
using Restaurant.Api.Services;

namespace Restaurant.Api.Test.Repositories
{
    public abstract class BaseRepositoryTestBase : IDisposable
    {
        protected readonly IServiceProvider ServiceProvider;
        protected BaseRepositoryTestBase()
        {
            var config = new ConfigurationBuilder()
                .AddJsonFile("appsettings.json")
                .Build();

            var serviceCollection = new ServiceCollection()
                .Configure<MongoDbCollectionSettings>(config.GetSection("MongoDbSettings"))
                .AddLogging(c => c.AddConsole().AddDebug())
                .AddRestaurantServiceCollection();
            ServiceProvider = serviceCollection.BuildServiceProvider();
        }
        public virtual void Dispose()
        {
        }
    }
}
