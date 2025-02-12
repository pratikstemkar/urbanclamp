package xyz.urbanclamp.bookingservice.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Data
@EqualsAndHashCode(callSuper = true)
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "bookings")
public class Booking extends BaseAuditEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "booking_id")
    private Long id;

    @Column(name = "user_id")
    private Long userId;

    @Column(name = "partner_id")
    private Long partnerId;

    @Column(name = "service_id")
    private Long serviceId;

    @Column(name = "address_id")
    private Long addressId;

    @Column(name = "booking_date")
    private LocalDate bookingDate;

    @Column(name = "time_slot")
    private String timeSlot;

    @Builder.Default
    @Enumerated(EnumType.STRING)
    @Column(name = "booking_status")
    private BookingStatus bookingStatus = BookingStatus.PROCESSING;

    @Column(name = "amount")
    private Double amount;
}
