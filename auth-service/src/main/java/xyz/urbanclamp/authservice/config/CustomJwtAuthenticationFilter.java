package xyz.urbanclamp.authservice.config;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import xyz.urbanclamp.authservice.utils.JwtUtils;

import java.io.IOException;

@Component
public class CustomJwtAuthenticationFilter extends OncePerRequestFilter {
    private final JwtUtils jwtUtils;

    public CustomJwtAuthenticationFilter(JwtUtils jwtUtils) {
        this.jwtUtils = jwtUtils;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        String authHeader = request.getHeader("Authorization");
        if(authHeader != null && authHeader.startsWith("Bearer ")) {
            String jwt = authHeader.substring(7);
            Authentication authentication = jwtUtils.populateAuthenticationTokenFromJwt(jwt);
            SecurityContextHolder.getContext().setAuthentication(authentication);
            System.out.println("Saved Auth Details to Auth Context");
        }
        filterChain.doFilter(request, response);
    }
}
