using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Restaurant.Api.Middleware;
using Restaurant.Api.Models;
using Restaurant.Api.Services;
using Swashbuckle.AspNetCore.Swagger;
using Swashbuckle.AspNetCore.SwaggerUI;

namespace Restaurant.Api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
            services.Configure<MongoDbCollectionSettings>(Configuration.GetSection("MongoDbSettings"));

            services.AddCors(o => o.AddPolicy("RestaurantPolicy1",
                builder => builder.AllowAnyOrigin()
                                                .WithHeaders("accept", "accept-encoding", "accept-language", "X-Requested-With", "authenticationToken", "applicationToken", "content-type", "time-zone-offset", "api-version")
                                                .WithMethods("GET", "PATCH", "PUT", "DELETE", "POST")
            )).AddSwaggerGen(options =>
            {
                options.DescribeAllEnumsAsStrings();
                options.SwaggerDoc("v1", new Info
                {
                    Version = "v1",
                    Title = "Anitha Restaurant Internal - Api",
                    Description =
                        "The objective of this MicroService  to serve the coding challenge."
                });
            }).AddRestaurantServiceCollection();
        }


        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            app.UseMvc()
                .UseOptions()
                .UseSwagger()
                .UseSwaggerUI(c =>
                {
                    c.DocExpansion(DocExpansion.None);
                    c.SwaggerEndpoint(Configuration["Swagger:InternalJSONLocation"], "Anitha Restaurant Internal - Api");
                });
        }
    }
}
