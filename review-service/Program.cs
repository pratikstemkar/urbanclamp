
using System.Text.Json.Serialization;
using Microsoft.EntityFrameworkCore;
using review_service.Data;
using Steeltoe.Discovery.Client;
using Steeltoe.Discovery.Eureka;

namespace review_service;

public class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);
        
        var conString = builder.Configuration.GetConnectionString("DefaultConnection");
        builder.Services.AddDbContext<AppDbContext>(options => options.UseMySql(conString, ServerVersion.AutoDetect(conString)));
        
        builder.Services.AddControllers().AddJsonOptions(x =>
            x.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles);

        builder.Services.AddSingleton<IHostedService, EurekaService>();
        builder.Services.AddAuthorization();
        builder.Services.AddOpenApi();
        builder.Services.AddSwaggerGen();
        builder.Services.AddServiceDiscovery(options =>
        {
            options.UseEureka();    
        });

        var app = builder.Build();
        
        app.UseCors((policyBuilder) =>
            policyBuilder.WithOrigins("*")
                .WithHeaders("*")
                .WithMethods("*"));

        if (app.Environment.IsDevelopment())
        {
            app.MapOpenApi();
        }

        app.UseSwagger();
        app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "review_service"));
        app.UseAuthorization();
        app.MapControllers();
        app.Run();
    }
}
