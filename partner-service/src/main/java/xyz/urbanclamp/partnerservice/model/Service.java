package xyz.urbanclamp.partnerservice.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

@EqualsAndHashCode(callSuper = true)
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "services")
public class Service extends BaseAuditEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "service_id")
    private Long id;

    @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "description", columnDefinition = "text")
    private String description;

    @Column(name = "picture")
    private String picture;

    @Column(name = "duration")
    private Integer duration;

    @Builder.Default
    @Enumerated(EnumType.STRING)
    @Column(name = "service_status")
    private ServiceStatus serviceStatus = ServiceStatus.AVAILABLE;

    @Column(name = "price", nullable = false)
    private Double price;

    @ManyToOne
    @JoinColumn(name = "category_id", referencedColumnName = "category_id")
    @JsonIgnore
    private Category category;

    @ManyToOne
    @JoinColumn(name = "partner_id", referencedColumnName = "partner_id")
    private Partner partner;
}
