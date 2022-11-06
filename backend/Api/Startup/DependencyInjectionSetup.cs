using System.Text;
using Business.Data;
using Business.Services;
using Core.Interfaces.Repositories;
using Core.Interfaces.Services;
using Core.MapperProfile;
using Core.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;

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

        services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
            .AddJwtBearer(options =>
            {
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["Token:Key"])),
                    ValidIssuer = config["Token:Issuer"],
                    ValidateIssuer = true,
                    ValidateAudience = false
                };
            });

        // Module services
        services.AddScoped<IUnitOfWork, UnitOfWork>();
        services.AddScoped<ITeacherService, TeacherService>();
        services.AddScoped<ITokenService, TokenService>();

        // Automapper configuration
        services.AddAutoMapper(typeof(MappingProfiles));

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