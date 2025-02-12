package xyz.urbanclamp.authservice.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import xyz.urbanclamp.authservice.dto.EmailRequestDTO;

@FeignClient(name = "email-service")
public interface EmailClient {
    @PostMapping("/send-email")
    ResponseEntity<?> sendEmail(@RequestBody EmailRequestDTO emailRequestDTO);
}
