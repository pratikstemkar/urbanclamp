package com.pratikstemkar.urbanclamp.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@EqualsAndHashCode(callSuper = false)
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "bookings")
public class Booking extends BaseAuditEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "booking_id")
    private Long id;

    @Column(name = "amount", nullable = false)
    private Double amount;

    @Column(name = "status")
    private BookingStatus status = BookingStatus.PENDING;

    @Column(name = "scheduled_at", nullable = false)
    private LocalDateTime scheduledAt;

    @OneToOne
    @JoinColumn(name = "user_id", referencedColumnName = "user_id")
    private User user;

    @OneToOne
    @JoinColumn(name = "service_id", referencedColumnName = "service_id")
    private Service service;
}
