using Business.Data;
using Core.Interfaces.Repositories;
using Core.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Api.Startup;
public static class DependencyInjectionSetup
{
    public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration config)
    {
        services.AddControllers();

        // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
        services.AddEndpointsApiExplorer();
        services.AddSwaggerGen();

        // services.AddCorsToService();
        services.AddDb(config);

        services.Configure<ApiBehaviorOptions>(options =>
        {
            options.InvalidModelStateResponseFactory = actionContext =>
            {
                var errors = actionContext.ModelState
                    .Where(e => e.Value.Errors.Count > 0)
                    .SelectMany(x => x.Value.Errors)
                    .Select(x => x.ErrorMessage).ToArray();

                var errorResponse = new ApiValidationErrorResponse
                {
                    Errors = errors
                };

                return new BadRequestObjectResult(errorResponse);
            };
        });

        // Module services
        services.AddScoped<IUnitOfWork, UnitOfWork>();

        // Automapper configuration
        services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

        return services;
    }

    private static IServiceCollection AddCorsToService(this IServiceCollection services)
    {
        services.AddCors(o => o.AddPolicy("CorsPolicy", policy =>
        {
            policy
                .AllowAnyMethod()
                .AllowAnyHeader()
                .AllowCredentials()
                .WithOrigins("http://localhost:4200");
        }));
        return services;
    }

    private static IServiceCollection AddDb(this IServiceCollection services, IConfiguration config){
        services.AddDbContextPool<StoreContext>(options =>
        {
            options.UseNpgsql(config.GetConnectionString("PostgresConnection"));
        });
        return services;
    }
}