using System.Collections.Generic;
using System.Threading.Tasks;
using Restaurant.Api.Database;
using Restaurant.Api.Models;
using Restaurant.Api.Repositories;

namespace Restaurant.Api.Services
{
    public interface IRestaurantService
    {
        Task<List<RestaurantAction>> GetAllAsync();
        Task<PaginationResult<RestaurantAction>> SearchByPaginationQueryAsync(PaginationQuery<RestaurantAction> query);

        Task<List<string>> GetAllAvailableDistinctDishesAsync();
        Task<List<string>> GetAllAvailableDistinctActionAsync();
        Task<List<string>> GetAllAvailableDistinctStationAsync();
        Task<AggregateDataModel> GetAggregatedDataAsync(RestaurantAction query);

    }
    public class RestaurantService : IRestaurantService
    {
        private readonly IRestaurantRepository _restaurantRepository;

        public RestaurantService(IRestaurantRepository restaurantRepository)
        {
            _restaurantRepository = restaurantRepository;
        }

        public async Task<List<RestaurantAction>> GetAllAsync()
        {
            return await _restaurantRepository.GetAllAsync().ConfigureAwait(false);
        }

        public async Task<PaginationResult<RestaurantAction>> SearchByPaginationQueryAsync(PaginationQuery<RestaurantAction> query)
        {
            return await _restaurantRepository.SearchByPaginationQueryAsync(query).ConfigureAwait(false);
        }

        public async Task<List<string>> GetAllAvailableDistinctDishesAsync()
        {
            return await _restaurantRepository.GetAllAvailableDistinctDishesAsync().ConfigureAwait(false);

        }

        public async Task<List<string>> GetAllAvailableDistinctActionAsync()
        {
            return await _restaurantRepository.GetAllAvailableDistinctActionAsync().ConfigureAwait(false);

        }

        public async Task<List<string>> GetAllAvailableDistinctStationAsync()
        {
            return await _restaurantRepository.GetAllAvailableDistinctStationAsync().ConfigureAwait(false);

        }

        public async Task<AggregateDataModel> GetAggregatedDataAsync(RestaurantAction query)
        {
            return await _restaurantRepository.GetAggregatedDataAsync(query).ConfigureAwait(false);
        }
    }
}
