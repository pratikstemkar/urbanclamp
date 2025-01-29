package xyz.urbanclamp.bookingservice.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BookingUpdateDTO {
    private Long id;
    private Long userId;
    private Long partnerId;
    private Long serviceId;
    private LocalDate bookingDate;
    private String timeSlot;
    private String bookingStatus;
    private Double amount;
}
