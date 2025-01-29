package xyz.urbanclamp.authservice.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.*;
import xyz.urbanclamp.authservice.dto.FullUserDTO;
import xyz.urbanclamp.authservice.dto.UserDTO;
import xyz.urbanclamp.authservice.dto.UserRequestDTO;

@FeignClient(name = "user-service")
public interface UserClient {
    @GetMapping("/api/users/fullSearch")
    FullUserDTO getFullUserByEmail(@RequestParam String email);

    @PostMapping("/api/users")
    UserDTO createUser(@RequestBody UserRequestDTO userRequestDTO);

    @GetMapping("/api/users/search")
    UserDTO getUserByEmail(@RequestParam String email);
}
