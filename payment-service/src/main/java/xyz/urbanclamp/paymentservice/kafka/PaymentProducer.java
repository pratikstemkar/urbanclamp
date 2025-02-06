package xyz.urbanclamp.paymentservice.kafka;

import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.support.KafkaHeaders;
import org.springframework.messaging.Message;
import org.springframework.messaging.support.MessageBuilder;
import org.springframework.stereotype.Service;
import xyz.urbanclamp.basedomains.dto.StripeResponseDTO;

@Service
@RequiredArgsConstructor
public class PaymentProducer {
    private static final Logger LOGGER = LoggerFactory.getLogger(PaymentProducer.class);
    private final KafkaTemplate<String, StripeResponseDTO> kafkaTemplate;

    public void sendPaymentSuccess(StripeResponseDTO stripeResponseDTO) {
        LOGGER.info("Payment success");
        Message<StripeResponseDTO> message = MessageBuilder
                .withPayload(stripeResponseDTO)
                .setHeader(KafkaHeaders.TOPIC, "payment.successful")
                .build();
        kafkaTemplate.send(message);
    }

    public void sendPaymentFailed(StripeResponseDTO stripeResponseDTO) {
        LOGGER.info("Payment failed");
        Message<StripeResponseDTO> message = MessageBuilder
                .withPayload(stripeResponseDTO)
                .setHeader(KafkaHeaders.TOPIC, "payment.failed")
                .build();
        kafkaTemplate.send(message);
    }

}
