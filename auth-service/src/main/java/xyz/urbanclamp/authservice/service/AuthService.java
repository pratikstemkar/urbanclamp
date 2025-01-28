package xyz.urbanclamp.authservice.service;

import xyz.urbanclamp.basedomains.dto.user.UserDTO;
import xyz.urbanclamp.basedomains.dto.user.UserRequestDTO;

public interface AuthService {
    UserDTO registerUser(UserRequestDTO userRequestDTO);
    UserDTO validateAccessToken(String token);
}
