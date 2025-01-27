package xyz.urbanclamp.authservice.service;

import xyz.urbanclamp.basedomains.dto.UserDTO;
import xyz.urbanclamp.basedomains.dto.UserRequestDTO;

public interface AuthService {
    UserDTO registerUser(UserRequestDTO userRequestDTO);
    UserDTO validateAccessToken(String token);
}
