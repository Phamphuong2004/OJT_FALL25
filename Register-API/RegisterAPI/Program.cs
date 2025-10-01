using RegisterAPI.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

// Ch? cho phép truy c?p t? frontend t?i http://localhost:5173
builder.Services.AddCors(options =>
{
    options.AddPolicy("FrontendPolicy",
        policy => policy.WithOrigins("http://localhost:5173")
                        .AllowAnyHeader()
                        .AllowAnyMethod());
});

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// S? d?ng CORS v?i policy m?i
app.UseCors("FrontendPolicy");

app.UseAuthorization();

app.MapControllers();

app.Run();
