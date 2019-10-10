using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Options;
using MongoDB.Bson;
using MongoDB.Driver;
using Restaurant.Api.Database;
using Restaurant.Api.Models;

namespace Restaurant.Api.Repositories
{
    public interface IRestaurantRepository
    {
        Task<List<RestaurantAction>> GetAllAsync();
        Task<PaginationResult<RestaurantAction>> SearchByPaginationQueryAsync(PaginationQuery<RestaurantAction> query);
        Task<List<string>> GetAllAvailableDistinctDishesAsync();

        Task<List<string>> GetAllAvailableDistinctStationAsync();

        Task<List<string>> GetAllAvailableDistinctActionAsync();

        Task<AggregateDataModel> GetAggregatedDataAsync(RestaurantAction query);
    }

    public class RestaurantRepository : IRestaurantRepository
    {
        private readonly IMongoDbClient _mongoDbClient;
        private readonly MongoDbCollectionSettings _settings;
        public RestaurantRepository(IMongoDbClient mongoDbClient, IOptions<MongoDbCollectionSettings> options)
        {
            _mongoDbClient = mongoDbClient;
            _settings = options.Value;

        }

        public async Task<List<RestaurantAction>> GetAllAsync()
        {
            var actions = _mongoDbClient.MongoDatabase.GetCollection<RestaurantAction>(_settings.ActionCollectionName);
            return await actions.Find(c => true).ToListAsync().ConfigureAwait(false);
        }

        public async Task<PaginationResult<RestaurantAction>> SearchByPaginationQueryAsync(PaginationQuery<RestaurantAction> query)
        {
            var actions = _mongoDbClient.MongoDatabase.GetCollection<RestaurantAction>(_settings.ActionCollectionName);

            var filters = new List<FilterDefinition<RestaurantAction>>();

            if (!string.IsNullOrWhiteSpace(query.DataQueryInput?.UserAction))
            {
                var filter = Builders<RestaurantAction>.Filter.Eq(c => c.UserAction, query.DataQueryInput.UserAction.Trim());
                filters.Add(filter);
            }

            if (!string.IsNullOrWhiteSpace(query.DataQueryInput?.Dish))
            {
                var filter = Builders<RestaurantAction>.Filter.Eq(c => c.Dish, query.DataQueryInput.Dish.Trim());
                filters.Add(filter);
            }

            if (!string.IsNullOrWhiteSpace(query.DataQueryInput?.Station))
            {
                var filter = Builders<RestaurantAction>.Filter.Eq(c => c.Station, query.DataQueryInput.Station.Trim());
                filters.Add(filter);
            }

            if (!filters.Any())
            {
                filters.Add(Builders<RestaurantAction>.Filter.Empty);
            }

            var aggregateFilters = Builders<RestaurantAction>.Filter.And(filters);


            var result = await actions.Find(aggregateFilters)
                                .Skip((query.PageIndex > 0 ? query.PageIndex - 1 : 0) * query.PageSize)
                                .Limit(query.PageSize)
                                .ToListAsync().ConfigureAwait(false);

            return new PaginationResult<RestaurantAction>
            {
                Items = result,
                PageIndex = query.PageIndex,
                PageSize = query.PageSize,
                TotalCount = await actions.CountDocumentsAsync(aggregateFilters).ConfigureAwait(false),
            };
        }

        public async Task<AggregateDataModel> GetAggregatedDataAsync(RestaurantAction query)
        {
            var actions = _mongoDbClient.MongoDatabase.GetCollection<RestaurantAction>(_settings.ActionCollectionName);

            var filters = new List<FilterDefinition<RestaurantAction>>();

            if (!string.IsNullOrWhiteSpace(query?.UserAction))
            {
                var filter = Builders<RestaurantAction>.Filter.Eq(c => c.UserAction, query.UserAction.Trim());
                filters.Add(filter);
            }

            if (!string.IsNullOrWhiteSpace(query?.Dish))
            {
                var filter = Builders<RestaurantAction>.Filter.Eq(c => c.Dish, query.Dish.Trim());
                filters.Add(filter);
            }

            if (!string.IsNullOrWhiteSpace(query?.Station))
            {
                var filter = Builders<RestaurantAction>.Filter.Eq(c => c.Station, query.Station.Trim());
                filters.Add(filter);
            }

            if (!filters.Any())
            {
                filters.Add(Builders<RestaurantAction>.Filter.Empty);
            }

            var aggregateFilters = Builders<RestaurantAction>.Filter.And(filters);

            var result = await actions.Find(aggregateFilters)
                                      .ToListAsync().ConfigureAwait(false);

            return new AggregateDataModel
            {
                TotalDuration = Math.Round(result.Sum(x => x.Duration), 3),
                AverageDuration = Math.Round(result.Sum(x => x.Duration) / result.Count, 3),
                TotalItems = result.Count,
                Actions = result.GroupBy(x => x.UserAction).Select(x => new Pair
                {
                    Value = x.Count(),
                    Key = x.Key
                }),
                Dishes = result.GroupBy(x => x.Dish).Select(x => new Pair
                {
                    Value = x.Count(),
                    Key = x.Key
                }),
                Stations = result.GroupBy(x => x.Station).Select(x => new Pair
                {
                    Value = x.Count(),
                    Key = x.Key
                })
            };
        }

        public async Task<List<string>> GetAllAvailableDistinctDishesAsync()
        {
            var actions = _mongoDbClient.MongoDatabase.GetCollection<RestaurantAction>(_settings.ActionCollectionName);
            return await (await actions.DistinctAsync<string>("dish", new BsonDocument())).ToListAsync();
        }

        public async Task<List<string>> GetAllAvailableDistinctStationAsync()
        {
            var actions = _mongoDbClient.MongoDatabase.GetCollection<RestaurantAction>(_settings.ActionCollectionName);
            return await (await actions.DistinctAsync<string>("station", new BsonDocument())).ToListAsync();
        }

        public async Task<List<string>> GetAllAvailableDistinctActionAsync()
        {
            var actions = _mongoDbClient.MongoDatabase.GetCollection<RestaurantAction>(_settings.ActionCollectionName);
            return await (await actions.DistinctAsync<string>("action", new BsonDocument())).ToListAsync();
        }
    }
}
