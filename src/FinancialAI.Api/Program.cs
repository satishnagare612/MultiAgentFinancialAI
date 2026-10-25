using FinancialAI.Application;
using FinancialAI.Infrastructure;

var builder = WebApplication.CreateBuilder(args);

// Register Clean Architecture layers
builder.Services.AddApplication();
builder.Services.AddInfrastructure(builder.Configuration);

// Add API endpoints & OpenAPI
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// Liveness & Readiness Probes
app.MapGet("/healthz", () => Results.Ok(new
{
    status = "healthy",
    timestamp = DateTime.UtcNow
}))
.WithName("HealthCheck")
.WithOpenApi();

app.MapGet("/readyz", () => Results.Ok(new
{
    status = "ready",
    timestamp = DateTime.UtcNow
}))
.WithName("ReadinessCheck")
.WithOpenApi();

app.Run();
