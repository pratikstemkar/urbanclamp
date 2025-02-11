using Steeltoe.Discovery.Eureka;

namespace review_service;

public class EurekaService : IHostedService
{
    private readonly EurekaDiscoveryClient _eurekaClient;
    private readonly ILogger<EurekaService> _logger;

    public EurekaService(EurekaDiscoveryClient eurekaClient, ILogger<EurekaService> logger)
    {
        _eurekaClient = eurekaClient;
        _logger = logger;
    }

    public Task StartAsync(CancellationToken cancellationToken)
    {
        _logger.LogInformation("Eureka Client started.");
        return Task.CompletedTask;
    }

    public async Task StopAsync(CancellationToken cancellationToken)
    {
        _logger.LogInformation("Deregistering from Eureka...");
        await _eurekaClient.ShutdownAsync();
        _logger.LogInformation("Deregistered successfully.");
    }
}