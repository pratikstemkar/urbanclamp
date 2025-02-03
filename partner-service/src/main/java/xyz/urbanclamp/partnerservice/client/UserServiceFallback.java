package xyz.urbanclamp.partnerservice.client;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import xyz.urbanclamp.partnerservice.dto.AddRoleToUserDTO;
import xyz.urbanclamp.partnerservice.dto.UserDTO;

@Component
public class UserServiceFallback implements UserClient {

    @Override
    public ResponseEntity<UserDTO> addRoleToUser(AddRoleToUserDTO addRoleToUserDTO) {
        return ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE).body(null);
    }
}
