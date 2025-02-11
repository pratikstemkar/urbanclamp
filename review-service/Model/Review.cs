using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace review_service.Model;

[Table("reviews")]
public class Review
{
    [Key]
    [Column("id")]
    public long Id { get; set; }

    [Column("title", TypeName = "VARCHAR(255)")]
    public string Title { get; set; }

    [Column("review_text", TypeName = "TEXT")]
    public string ReviewText { get; set; }
    
    [Column("user_id")]
    public long UserId { get; set; }

    [Column("service_id")]
    public long ServiceId { get; set; }

    [Column("partner_id")]
    public long PartnerId { get; set; }
}