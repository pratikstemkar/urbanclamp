package xyz.urbanclamp.paymentservice.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PaymentRequestDTO {
    private Long bookingId;
    private Long amount;
    private Long quantity;
    private String name;
    private String currency;
}
