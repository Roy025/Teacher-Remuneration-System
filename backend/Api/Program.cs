using Api.Middlewares;
using Api.Startup;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddApplicationServices(builder.Configuration);

var app = builder.Build();

// Configure the HTTP request pipeline.
app.ConfigureSwagger();

app.UseMiddleware<ExceptionMiddleware>();

app.UseStatusCodePagesWithReExecute("/errors/{0}");
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
