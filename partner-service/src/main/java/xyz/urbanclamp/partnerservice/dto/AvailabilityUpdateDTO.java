package xyz.urbanclamp.partnerservice.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.Set;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AvailabilityUpdateDTO {
    private Long id;
    private Long partnerId;
    private LocalDate availableDate;
    private Set<String> availableTimeSlots;
}
