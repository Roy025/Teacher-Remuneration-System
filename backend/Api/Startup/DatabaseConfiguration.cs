using Business.Data;
using Microsoft.EntityFrameworkCore;

namespace Api.Startup;
public static class DatabaseConfiguration
{
    public static async Task<WebApplication> ConfigureDatabaseAsync(this WebApplication app)
    {
        using var scope = app.Services.CreateScope();
        var services = scope.ServiceProvider;
        var loggerFactory = services.GetRequiredService<ILoggerFactory>();
        try
        {
            var context = services.GetRequiredService<StoreContext>();
            await context.Database.MigrateAsync();
            // await StoreContextSeed.SeedAsync(context, loggerFactory);
        }
        catch (Exception ex)
        {
            var logger = services.GetRequiredService<ILogger<Program>>();
            logger.LogError(ex, "An Error Occured During Migration!");
            throw ex;
        }
        return app;
    }
}
