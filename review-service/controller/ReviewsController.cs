using Microsoft.AspNetCore.Mvc;
using review_service.Data;

namespace review_service.controller;

[Route("api/[controller]")]
[ApiController]
public class ReviewsController: ControllerBase
{
    private readonly AppDbContext db;

    public ReviewsController(AppDbContext db)
    {
        this.db = db;
    }

    [HttpGet]
    public IActionResult Get()
    {
        var reviews = db.Reviews;
        return Ok(reviews);
    }
}