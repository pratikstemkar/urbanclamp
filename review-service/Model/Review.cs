using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace review_service.Model;

[Table("reviews")]
public class Review
{
    [Column("id")]
    [Key]
    public long Id { get; set; }
    
    [Column("title", TypeName = "varchar")]
    public string Title { get; set; }
    
    [Column("content", TypeName = "varchar")]
    public string Content { get; set; }

    [Column("user_id")]
    public long UserId { get; set; }
    
    [Column("service_id")]
    public long ServiceId { get; set; }
    
    [Column("partner_id")]
    public long PartnerId { get; set; }
}