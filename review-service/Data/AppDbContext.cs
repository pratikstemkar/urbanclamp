using Microsoft.EntityFrameworkCore;
using review_service.Model;

namespace review_service.Data;

public class AppDbContext: DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }
    
    public DbSet<Review> Reviews { get; set; }
}