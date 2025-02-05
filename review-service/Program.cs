
using System.Text.Json.Serialization;
using Microsoft.EntityFrameworkCore;
using review_service.Data;

namespace review_service;

public class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);
        
        var conString = builder.Configuration.GetConnectionString("DefaultConnection");
        builder.Services.AddDbContext<AppDbContext>(options =>
            options.UseMySQL(conString));
        
        builder.Services.AddControllers().AddJsonOptions(x =>
            x.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles);
        
        // Add services to the container.
        builder.Services.AddAuthorization();

        // Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
        builder.Services.AddOpenApi();

        var app = builder.Build();
        
        app.UseCors((policyBuilder) =>
            policyBuilder.WithOrigins("*")
                .WithHeaders("*")
                .WithMethods("*"));

        // Configure the HTTP request pipeline.
        if (app.Environment.IsDevelopment())
        {
            app.MapOpenApi();
        }

        app.UseAuthorization();
        app.MapControllers();
        app.Run();
    }
}
