package xyz.urbanclamp.authservice.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.*;
import xyz.urbanclamp.basedomains.dto.user.FullUserDTO;
import xyz.urbanclamp.basedomains.dto.user.UserDTO;
import xyz.urbanclamp.basedomains.dto.user.UserRequestDTO;

@FeignClient(name = "user-service")
public interface UserClient {
    @GetMapping("/api/users/fullSearch")
    FullUserDTO getFullUserByEmail(@RequestParam String email);

    @PostMapping("/api/users")
    UserDTO createUser(@RequestBody UserRequestDTO userRequestDTO);

    @GetMapping("/api/users/search")
    UserDTO getUserByEmail(@RequestParam String email);
}
