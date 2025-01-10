package xyz.urbanclamp.notificationservice.kafka;

import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;
import xyz.urbanclamp.notificationservice.dto.NotificationDTO;
import xyz.urbanclamp.notificationservice.dto.NotificationStatus;
import xyz.urbanclamp.notificationservice.service.NotificationService;
import xyz.urbanclamp.userservice.dto.UserDTO;

@Service
@RequiredArgsConstructor
public class UserConsumer {
    private static final Logger LOGGER = LoggerFactory.getLogger(UserConsumer.class);
    private final NotificationService notificationService;

    @KafkaListener(topics = "${spring.kafka.topic.name}", groupId = "${spring.kafka.consumer.group-id}")
    public void consume(UserDTO userDTO) {
        LOGGER.info(String.format("User Event received in notification service: %s", userDTO.toString()));
        notificationService.sendNotification(NotificationDTO.builder()
                            .status(NotificationStatus.USER_CREATED)
                            .message("User is created")
                            .build());
    }
}
