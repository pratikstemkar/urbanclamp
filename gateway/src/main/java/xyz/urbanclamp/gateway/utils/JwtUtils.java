package xyz.urbanclamp.gateway.utils;

import io.jsonwebtoken.Claims;
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

    public String getUsernameFromJwtToken(Claims claims) {
        return claims.getSubject();
    }

    public Claims validateJwtToken(String jwtToken) {
        return Jwts.parser()
                .verifyWith((SecretKey) key)
                .build()
                .parseSignedClaims(jwtToken)
                .getPayload();
    }

    public Long getUserIdFromJwtToken(Claims claims) {
        return (long) (int) claims.get("user_id");
    }
}
