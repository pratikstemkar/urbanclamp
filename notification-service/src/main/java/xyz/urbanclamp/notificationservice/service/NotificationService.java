package xyz.urbanclamp.notificationservice.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;
import xyz.urbanclamp.notificationservice.dto.NotificationDTO;

@Service
@RequiredArgsConstructor
@Slf4j
public class NotificationService {
    private final SimpMessagingTemplate simpMessagingTemplate;

    public void sendNotification(NotificationDTO notificationDTO) {
        log.info("Sending WS notification to all with payload {}", notificationDTO);
        simpMessagingTemplate.convertAndSend("/topic/notifications", notificationDTO);
    }
}
