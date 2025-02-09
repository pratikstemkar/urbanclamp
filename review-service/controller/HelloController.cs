using Microsoft.AspNetCore.Mvc;

namespace review_service.controller;

[Route("api/[controller]")]
[ApiController]
public class HelloController: ControllerBase
{
    [HttpGet]
    public string Get()
    {
        return "Hello World!";
    }
}