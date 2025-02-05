package xyz.urbanclamp.bookingservice.kafka;

import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;
import xyz.urbanclamp.base_domains.dto.StripeResponseDTO;
import xyz.urbanclamp.bookingservice.service.BookingService;

@Service
@RequiredArgsConstructor
public class PaymentConsumer {
    private static final Logger LOGGER = LoggerFactory.getLogger(PaymentConsumer.class);
    private final BookingService bookingService;

    @KafkaListener(topics = "payment.successful", groupId = "${spring.kafka.consumer.group-id}")
    public void consumeSuccess(StripeResponseDTO stripeResponseDTO) {
        LOGGER.info(String.format("Payment Success: %s", stripeResponseDTO.toString()));
        bookingService.setBookingStatus(stripeResponseDTO.getBookingId() == null ? 1L : Long.parseLong(stripeResponseDTO.getBookingId()), "BOOKED");
    }

    @KafkaListener(topics = "payment.failed", groupId = "${spring.kafka.consumer.group-id}")
    public void consumeFailure(StripeResponseDTO stripeResponseDTO) {
        LOGGER.info(String.format("Payment Failed: %s", stripeResponseDTO.toString()));
        bookingService.setBookingStatus(stripeResponseDTO.getBookingId() == null ? 1L : Long.parseLong(stripeResponseDTO.getBookingId()), "PROCESSING");
    }
}
