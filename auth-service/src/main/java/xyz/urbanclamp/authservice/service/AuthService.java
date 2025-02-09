package xyz.urbanclamp.authservice.service;

import xyz.urbanclamp.authservice.dto.UserDTO;
import xyz.urbanclamp.authservice.dto.UserRequestDTO;

public interface AuthService {
    UserDTO registerUser(UserRequestDTO userRequestDTO);
    UserDTO validateAccessToken(String token);
}
