package xyz.urbanclamp.partnerservice.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.Set;

@Data
@EqualsAndHashCode(callSuper = true)
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "availability")
public class Availability extends BaseAuditEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "availability_id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "partner_id")
    private Partner partner;

    @Column(name = "available_date")
    private LocalDate availableDate;

    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(
            name = "availability_time_slots",
            joinColumns = @JoinColumn(name = "availability_id")
    )
    @Column(name = "time_slot")
    private Set<String> availableTimeSlots;
}
