using Microsoft.Extensions.DependencyInjection;
using Restaurant.Api.Attributes;
using Restaurant.Api.Database;
using Restaurant.Api.Repositories;

namespace Restaurant.Api.Services
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection AddRestaurantServiceCollection(this IServiceCollection serviceCollection)
        {
            serviceCollection.AddSingleton<IMongoDbClient, MongoDbClient>()
                .AddScoped<IRestaurantService, RestaurantService>()
                .AddScoped<IExceptionService, ExceptionService>()
                .AddScoped<ExceptionActionFilterAttribute>()
                .AddScoped<IRestaurantRepository, RestaurantRepository>();
            return serviceCollection;
        }
    }
}
