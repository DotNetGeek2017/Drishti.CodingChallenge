using System.Linq;
using System.Threading.Tasks;
using FluentAssertions;
using Restaurant.Api.Repositories;
using Xunit;
using Microsoft.Extensions.DependencyInjection;
using Restaurant.Api.Database;
using Restaurant.Api.Models;

namespace Restaurant.Api.Test.Repositories
{
    public class RestaurantRepositoryTests : BaseRepositoryTestBase
    {
        [Theory]
        [InlineData(1, 100)]
        [InlineData(26, 20)]
        public async Task Repository_Search_TestCase1(int pageIndex, int itemsCount)
        {
            //Arrange
            var restaurantRepository = ServiceProvider.GetService<IRestaurantRepository>();

            //Act
            var result = await restaurantRepository.SearchByPaginationQueryAsync(new PaginationQuery<RestaurantAction>
            {
                PageIndex = pageIndex,
                PageSize = 100,
            });
            //Assert
            result.Should().NotBeNull();
            result.TotalCount.Should().Be(2520);
            result.Items.Count().Should().Be(itemsCount);
        }

        [Fact]
        public async Task Repository_Search_TestCase2()
        {
            //Arrange
            var restaurantRepository = ServiceProvider.GetService<IRestaurantRepository>();

            //Act
            var result = await restaurantRepository.SearchByPaginationQueryAsync(new PaginationQuery<RestaurantAction>
            {
                PageIndex = 1,
                PageSize = 100,
                DataQueryInput = new RestaurantAction
                {
                    UserAction = "toss",
                    Dish = "Biryani"
                }
            });
            //Assert
            result.Should().NotBeNull();
            result.TotalCount.Should().Be(0);
            result.Items.Count().Should().Be(0);
        }

        [Fact]
        public async Task Repository_Search_TestCase3()
        {
            //Arrange
            var restaurantRepository = ServiceProvider.GetService<IRestaurantRepository>();

            //Act
            var result = await restaurantRepository.SearchByPaginationQueryAsync(new PaginationQuery<RestaurantAction>
            {
                PageIndex = 1,
                PageSize = 100,
                DataQueryInput = new RestaurantAction
                {
                    UserAction = "toss",
                    Dish = "salad",
                    Station = "saladbay2"
                }
            });
            //Assert
            result.Should().NotBeNull();
            result.TotalCount.Should().Be(65);
            result.Items.Count().Should().Be(65);
        }
    }
}
