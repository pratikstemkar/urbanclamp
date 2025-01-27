package xyz.urbanclamp.authservice.utils;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.stereotype.Component;
import xyz.urbanclamp.authservice.model.CustomUserDetailsImpl;

import javax.crypto.SecretKey;
import java.security.Key;
import java.util.Collection;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class JwtUtils {
    @Value("${spring.security.jwt.secret.key}")
    private String jwtSecret;

    @Value("${spring.security.jwt.exp.time}")
    private int jwtExpirationMs;

    private Key key;

    @PostConstruct
    public void init() {
        key = Keys.hmacShaKeyFor(jwtSecret.getBytes());
    }

    public String generateJwtToken(Authentication authentication) {
        CustomUserDetailsImpl userPrincipal = (CustomUserDetailsImpl) authentication.getPrincipal();
        return Jwts.builder()
                .subject(userPrincipal.getUsername())
                .issuedAt(new Date())
                .expiration(new Date((new Date()).getTime() + jwtExpirationMs))
                .claim("authorities", getAuthoritiesInString(userPrincipal.getAuthorities()))
                .claim("user_id", userPrincipal.getFullUserDTO().getId())
                .signWith(key)
                .compact();
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

    private String getAuthoritiesInString(Collection<? extends GrantedAuthority> authorities) {
        String authorityString = authorities.stream().map(GrantedAuthority::getAuthority)
                .collect(Collectors.joining(","));
        System.out.println(authorityString);
        return authorityString;
    }

    public List<GrantedAuthority> getAuthoritiesFromClaims(Claims claims) {
        String authString = (String) claims.get("authorities");
        List<GrantedAuthority> authorities = AuthorityUtils.commaSeparatedStringToAuthorityList(authString);
        authorities.forEach(System.out::println);
        return authorities;
    }

    public Long getUserIdFromJwtToken(Claims claims) {
        return (long) (int) claims.get("user_id");
    }

    public Authentication populateAuthenticationTokenFromJwt(String jwt) {
        Claims payloadClaims = validateJwtToken(jwt);
        String email = getUsernameFromJwtToken(payloadClaims);
        List<GrantedAuthority> authorities = getAuthoritiesFromClaims(payloadClaims);
        Long userId = getUserIdFromJwtToken(payloadClaims);
        UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(email, userId, authorities);
        System.out.println("Is Authenticated: " + token.isAuthenticated());
        return token;
    }
}
