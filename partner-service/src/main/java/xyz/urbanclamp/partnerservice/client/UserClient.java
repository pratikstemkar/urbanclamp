package xyz.urbanclamp.partnerservice.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import xyz.urbanclamp.partnerservice.dto.AddRoleToUserDTO;
import xyz.urbanclamp.partnerservice.dto.UserDTO;

@FeignClient(name = "user-service", fallback = UserServiceFallback.class)
public interface UserClient {
    @PutMapping("/api/users/addRole")
    ResponseEntity<UserDTO> addRoleToUser(@RequestBody AddRoleToUserDTO addRoleToUserDTO);
}
