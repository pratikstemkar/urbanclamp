package xyz.urbanclamp.authservice.service;

import io.jsonwebtoken.Claims;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import xyz.urbanclamp.authservice.client.UserClient;
import xyz.urbanclamp.authservice.utils.JwtUtils;
import xyz.urbanclamp.basedomains.dto.user.UserDTO;
import xyz.urbanclamp.basedomains.dto.user.UserRequestDTO;

@Service
public class AuthServiceImpl implements AuthService {
    private final PasswordEncoder passwordEncoder;
    private final UserClient userClient;
    private final JwtUtils jwtUtils;

    public AuthServiceImpl(PasswordEncoder passwordEncoder, UserClient userClient, JwtUtils jwtUtils) {
        this.passwordEncoder = passwordEncoder;
        this.userClient = userClient;
        this.jwtUtils = jwtUtils;
    }

    @Override
    public UserDTO registerUser(UserRequestDTO userRequestDTO) {
        userRequestDTO.setPassword(passwordEncoder.encode(userRequestDTO.getPassword()));
        try {
            return userClient.createUser(userRequestDTO);
        } catch (Exception e) {
            return null;
        }
    }

    @Override
    public UserDTO validateAccessToken(String token) {
        Claims claims = jwtUtils.validateJwtToken(token);
        String email = jwtUtils.getUsernameFromJwtToken(claims);
        UserDTO userDTO = null;
        try {
            userDTO = userClient.getUserByEmail(email);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        return userDTO;
    }
}
