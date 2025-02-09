package xyz.urbanclamp.authservice.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import xyz.urbanclamp.authservice.dto.FullUserDTO;
import xyz.urbanclamp.authservice.dto.UserDTO;
import xyz.urbanclamp.authservice.dto.UserRequestDTO;

@FeignClient(name = "user-service", fallback = UserServiceFallback.class)
public interface UserClient {
    @GetMapping("/api/users/fullSearch")
    ResponseEntity<FullUserDTO> getFullUserByEmail(@RequestParam String email);

    @PostMapping("/api/users")
    ResponseEntity<UserDTO> createUser(@RequestBody UserRequestDTO userRequestDTO);

    @GetMapping("/api/users/search")
    ResponseEntity<UserDTO> getUserByEmail(@RequestParam String email);
}
