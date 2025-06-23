using backend.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
    {
        policy.WithOrigins("https://iprakhar25.github.io")
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});
builder.Services.AddSingleton<GitHubService>();
builder.Services.AddEndpointsApiExplorer();
var app = builder.Build();

app.UseCors("AllowFrontend");
app.UseAuthorization();
app.MapControllers();
app.Run();
