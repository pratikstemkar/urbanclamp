package xyz.urbanclamp.gateway.utils;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.security.Key;

@Component
public class JwtUtils {
    @Value("${spring.security.jwt.secret.key}")
    private String jwtSecret;

    private Key key;

    @PostConstruct
    public void init() {
        key = Keys.hmacShaKeyFor(jwtSecret.getBytes());
    }

    public void validateJwtToken(String jwtToken) {
        Jwts.parser()
                .verifyWith((SecretKey) key)
                .build()
                .parseSignedClaims(jwtToken)
                .getPayload();
    }
}
