package xyz.urbanclamp.authservice.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import xyz.urbanclamp.authservice.service.AuthService;
import xyz.urbanclamp.authservice.utils.JwtUtils;
import xyz.urbanclamp.authservice.dto.LoginDTO;
import xyz.urbanclamp.authservice.dto.UserRequestDTO;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    private final AuthService authService;
    private final AuthenticationManager authenticationManager;
    private final JwtUtils jwtUtils;

    public AuthController(AuthService authService, AuthenticationManager authenticationManager, JwtUtils jwtUtils) {
        this.authService = authService;
        this.authenticationManager = authenticationManager;
        this.jwtUtils = jwtUtils;
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody UserRequestDTO userRequestDTO) {
        System.out.println("Register User: " + userRequestDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(authService.registerUser(userRequestDTO));
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginDTO loginDTO) {
        System.out.println("In Login: " + loginDTO);
        UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(loginDTO.getEmail(), loginDTO.getPassword());
        System.out.println("Is Authenticated: " + token.isAuthenticated());
        Authentication authToken = authenticationManager.authenticate(token);
        System.out.println("authToken: " + authToken.isAuthenticated());
        Map<String, String> loginResponse = new HashMap<>();
        loginResponse.put("accessToken", jwtUtils.generateJwtToken(authToken));
        return ResponseEntity.ok(loginResponse);
    }

    @GetMapping("/validate/{token}")
    public ResponseEntity<?> validateAccessToken(@PathVariable String token) {
        return ResponseEntity.ok(authService.validateAccessToken(token));
    }
}
