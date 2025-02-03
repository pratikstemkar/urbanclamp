package xyz.urbanclamp.authservice.client;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import xyz.urbanclamp.authservice.dto.FullUserDTO;
import xyz.urbanclamp.authservice.dto.UserDTO;
import xyz.urbanclamp.authservice.dto.UserRequestDTO;

@Component
public class UserServiceFallback implements UserClient {

    @Override
    public ResponseEntity<FullUserDTO> getFullUserByEmail(String email) {
        return ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE).body(null);
    }

    @Override
    public ResponseEntity<UserDTO> createUser(UserRequestDTO request) {
        return ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE).body(null);
    }

    @Override
    public ResponseEntity<UserDTO> getUserByEmail(String email) {
        return ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE).body(null);
    }
}
