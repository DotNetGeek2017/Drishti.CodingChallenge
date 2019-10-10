using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors.Infrastructure;
using Microsoft.AspNetCore.Mvc;
using Restaurant.Api.Database;
using Restaurant.Api.Models;
using Restaurant.Api.Services;

namespace Restaurant.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RestaurantController : BaseController
    {
        private readonly IRestaurantService _restaurantService;
        public RestaurantController(IRestaurantService restaurantService)
        {
            _restaurantService = restaurantService;
        }

        [HttpGet]
        [ProducesResponseType(typeof(IEnumerable<RestaurantAction>), 200)]
        [ProducesResponseType(typeof(UnhandledException), 500)]
        public virtual async Task<IActionResult> Get()
        {
            return Ok(await _restaurantService.GetAllAsync());
        }


        [HttpGet]
        [ProducesResponseType(typeof(IEnumerable<RestaurantAction>), 200)]
        [Route("{pageSize:int}/{pageIndex:int}/search")]
        [ProducesResponseType(typeof(UnhandledException), 500)]
        public virtual async Task<IActionResult> SearchAsync(int pageSize, int pageIndex, [FromQuery] string dish, [FromQuery]  string station,
            [FromQuery] string action)
        {
            return Ok(await _restaurantService.SearchByPaginationQueryAsync(new PaginationQuery<RestaurantAction>
            {
                PageIndex = pageIndex,
                PageSize = pageSize,
                DataQueryInput = new RestaurantAction
                {
                    Station = station,
                    Dish = dish,
                    UserAction = action
                }
            }));
        }

        [HttpGet]
        [Route("dishes")]
        [ProducesResponseType(typeof(IEnumerable<string>), 200)]
        [ProducesResponseType(typeof(UnhandledException), 500)]
        public virtual async Task<IActionResult> GetDishes()
        {
            return Ok(await _restaurantService.GetAllAvailableDistinctDishesAsync());
        }


        [HttpGet]
        [Route("station")]
        [ProducesResponseType(typeof(IEnumerable<string>), 200)]
        [ProducesResponseType(typeof(UnhandledException), 500)]
        public virtual async Task<IActionResult> GetStations()
        {
            return Ok(await _restaurantService.GetAllAvailableDistinctStationAsync());
        }

        [HttpGet]
        [Route("action")]
        [ProducesResponseType(typeof(IEnumerable<string>), 200)]
        [ProducesResponseType(typeof(UnhandledException), 500)]
        public virtual async Task<IActionResult> GetActions()
        {
            return Ok(await _restaurantService.GetAllAvailableDistinctActionAsync());
        }

        [HttpGet]
        [Route("aggregateddata")]
        [ProducesResponseType(typeof(AggregateDataModel), 200)]
        [ProducesResponseType(typeof(UnhandledException), 500)]
        public virtual async Task<IActionResult> GetAggregatedData([FromQuery] string dish, [FromQuery]  string station,
            [FromQuery] string action)
        {
            return Ok(await _restaurantService.GetAggregatedDataAsync(new RestaurantAction
            {
                Dish = dish,
                Station = station,
                UserAction = action
            }));
        }
    }
}
