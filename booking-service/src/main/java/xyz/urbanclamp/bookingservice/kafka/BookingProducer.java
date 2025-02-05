package xyz.urbanclamp.bookingservice.kafka;

import lombok.RequiredArgsConstructor;
import org.apache.kafka.clients.admin.NewTopic;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.support.KafkaHeaders;
import org.springframework.messaging.Message;
import org.springframework.messaging.support.MessageBuilder;
import org.springframework.stereotype.Service;
import xyz.urbanclamp.bookingservice.model.Booking;

@Service
@RequiredArgsConstructor
public class BookingProducer {
    private static final Logger LOGGER = LoggerFactory.getLogger(BookingProducer.class);
    private final NewTopic topic;
    private final KafkaTemplate<String, Booking> kafkaTemplate;

    public void sendMessage(Booking booking) {
        LOGGER.info(String.format("Booking: " + booking.toString()));
        Message<Booking> message = MessageBuilder
                .withPayload(booking)
                .setHeader(KafkaHeaders.TOPIC, topic.name())
                .build();
        kafkaTemplate.send(message);
    }
}
