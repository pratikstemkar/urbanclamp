package xyz.urbanclamp.userservice.kafka;

import org.apache.kafka.clients.admin.NewTopic;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.support.KafkaHeaders;
import org.springframework.messaging.Message;
import org.springframework.messaging.support.MessageBuilder;
import org.springframework.stereotype.Service;
import xyz.urbanclamp.userservice.dto.UserDTO;

@Service
public class UserProducer {
    private static final Logger LOGGER = LoggerFactory.getLogger(UserProducer.class);
    private final NewTopic topic;
    private final KafkaTemplate<String, UserDTO> kafkaTemplate;

    public UserProducer(NewTopic topic, KafkaTemplate<String, UserDTO> kafkaTemplate) {
        this.topic = topic;
        this.kafkaTemplate = kafkaTemplate;
    }

    public void sendMessage(UserDTO userDTO) {
        LOGGER.info(String.format("User DTO: " + userDTO.toString()));
        Message<UserDTO> message = MessageBuilder
                .withPayload(userDTO)
                .setHeader(KafkaHeaders.TOPIC, topic.name())
                .build();
        kafkaTemplate.send(message);
    }
}
