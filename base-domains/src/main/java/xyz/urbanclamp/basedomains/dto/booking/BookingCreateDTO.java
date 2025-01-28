package xyz.urbanclamp.basedomains.dto.booking;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BookingCreateDTO {
    private Long userId;
    private Long partnerId;
    private Long serviceId;
    private LocalDate bookingDate;
    private String timeSlot;
    private Double amount;
}
