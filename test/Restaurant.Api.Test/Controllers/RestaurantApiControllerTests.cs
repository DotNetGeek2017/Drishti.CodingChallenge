using FluentAssertions;
using Restaurant.Api.Attributes;
using Restaurant.Api.Controllers;
using System;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Xunit;

namespace Restaurant.Api.Test.Controllers
{
    public class RestaurantApiControllerTests : BaseRestaurantApi
    {
        [Fact]
        public void ExceptionFilterAttributeMustBeDecoratedOnController()
        {
            //Arrange & Act
            var result = Attribute.GetCustomAttribute(typeof(RestaurantController), typeof(ServiceFilterAttribute), true);
            //Assert
            result.Should().NotBeNull();
            (result as ServiceFilterAttribute).ServiceType.Should().Be<ExceptionActionFilterAttribute>();
        }

        [Theory]
        [InlineData("api/restaurant")]
        [InlineData("api/restaurant/dishes")]
        [InlineData("api/restaurant/station")]
        [InlineData("api/restaurant/action")]

        public async Task Invoke_Restaurant_Get_EndPoint_Test(string endPointUrl)
        {
            //Arrange
            using (var client = RestaurantApiServer.CreateClient())
            {
                //Act
                var actionResult =
                    await client.SendAsync(new HttpRequestMessage(HttpMethod.Get, endPointUrl));
                //Assert
                actionResult.StatusCode.Should().Be(HttpStatusCode.OK);
            }
        }

        [Theory]
        [InlineData("api/restaurant/10/2/search")]
        [InlineData("api/restaurant/10/2/search?dish=abc")]
        [InlineData("api/restaurant/10/2/search?dish=abc&station=abc")]
        [InlineData("api/restaurant/10/2/search?dish=abc&station=abc&action=toss")]
        public async Task Invoke_Restaurant_Search_EndPoint_Test(string endPointUrl)
        {
            //Arrange
            using (var client = RestaurantApiServer.CreateClient())
            {
                //Act
                var actionResult =
                    await client.SendAsync(new HttpRequestMessage(HttpMethod.Get, endPointUrl));
                //Assert
                actionResult.StatusCode.Should().Be(HttpStatusCode.OK);
            }
        }

    }
}
