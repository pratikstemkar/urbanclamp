package xyz.urbanclamp.authservice.service;

import feign.Feign;
import feign.FeignException;
import io.jsonwebtoken.Claims;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import xyz.urbanclamp.authservice.client.UserClient;
import xyz.urbanclamp.authservice.exception.EmailAlreadyExistsException;
import xyz.urbanclamp.authservice.exception.UserNotFoundException;
import xyz.urbanclamp.authservice.utils.JwtUtils;
import xyz.urbanclamp.authservice.dto.UserDTO;
import xyz.urbanclamp.authservice.dto.UserRequestDTO;

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
            return userClient.createUser(userRequestDTO).getBody();
        } catch (FeignException.Conflict ce) {
            throw new EmailAlreadyExistsException("Account with the Email: " + userRequestDTO.getEmail() + " already exists.");
        } catch(Exception e) {
            System.out.println("No user found");
            return null;
        }
    }

    @Override
    public UserDTO validateAccessToken(String token) {
        Claims claims = jwtUtils.validateJwtToken(token);
        String email = jwtUtils.getUsernameFromJwtToken(claims);
        UserDTO userDTO = null;
        try {
            userDTO = userClient.getUserByEmail(email).getBody();
        } catch (FeignException.NotFound e) {
            throw new UserNotFoundException("User not found with Email: " + email);
        }
        return userDTO;
    }
}
