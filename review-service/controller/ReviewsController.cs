using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using review_service.Data;
using review_service.Model;

namespace review_service.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReviewsController : ControllerBase
    {
        private readonly AppDbContext _db;

        public ReviewsController(AppDbContext db)
        {
            _db = db;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Review>>> GetAll()
        {
            var reviews = await _db.Reviews.ToListAsync();
            return Ok(reviews);
        }

        [HttpGet("{id:long}")]
        public async Task<ActionResult<Review>> GetById(long id)
        {
            var review = await _db.Reviews.FindAsync(id);
            if (review == null)
                return NotFound(new { message = "Review not found" });

            return Ok(review);
        }

        [HttpGet("service/{serviceId:long}")]
        public async Task<ActionResult<IEnumerable<Review>>> GetByServiceId(long serviceId)
        {
            var reviews = await _db.Reviews.Where(r => r.ServiceId == serviceId).ToListAsync();
            if (reviews.Count == 0)
                return NotFound(new { message = "No reviews found for this service" });

            return Ok(reviews);
        }

        [HttpGet("partner/{partnerId:long}")]
        public async Task<ActionResult<IEnumerable<Review>>> GetByPartnerId(long partnerId)
        {
            var reviews = await _db.Reviews.Where(r => r.PartnerId == partnerId).ToListAsync();
            if (reviews.Count == 0)
                return NotFound(new { message = "No reviews found for this partner" });

            return Ok(reviews);
        }

        [HttpPost]
        public async Task<ActionResult<Review>> Create(Review review)
        {
            if (review == null)
                return BadRequest(new { message = "Invalid review data" });

            _db.Reviews.Add(review);
            await _db.SaveChangesAsync();

            return CreatedAtAction(nameof(GetById), new { id = review.Id }, review);
        }

        [HttpPut("{id:long}")]
        public async Task<IActionResult> Update(long id, Review updatedReview)
        {
            if (id != updatedReview.Id)
                return BadRequest(new { message = "ID mismatch" });

            var existingReview = await _db.Reviews.FindAsync(id);
            if (existingReview == null)
                return NotFound(new { message = "Review not found" });

            existingReview.Title = updatedReview.Title;
            existingReview.ReviewText = updatedReview.ReviewText;
            existingReview.UserId = updatedReview.UserId;
            existingReview.ServiceId = updatedReview.ServiceId;
            existingReview.PartnerId = updatedReview.PartnerId;

            await _db.SaveChangesAsync();
            return Ok(new { message = "Review updated successfully" });
        }

        [HttpDelete("{id:long}")]
        public async Task<IActionResult> Delete(long id)
        {
            var review = await _db.Reviews.FindAsync(id);
            if (review == null)
                return NotFound(new { message = "Review not found" });

            _db.Reviews.Remove(review);
            await _db.SaveChangesAsync();

            return Ok(new { message = "Review deleted successfully" });
        }
    }
}
