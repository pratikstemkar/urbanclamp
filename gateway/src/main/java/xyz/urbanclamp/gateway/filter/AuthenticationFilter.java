package xyz.urbanclamp.gateway.filter;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.gateway.filter.GatewayFilter;
import org.springframework.cloud.gateway.filter.factory.AbstractGatewayFilterFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.stereotype.Component;
import xyz.urbanclamp.gateway.exception.RoleNotAuthorizedException;
import xyz.urbanclamp.gateway.exception.InvalidAccessTokenException;
import xyz.urbanclamp.gateway.exception.MissingAuthHeaderException;
import xyz.urbanclamp.gateway.utils.JwtUtils;

import java.util.List;

@Component
public class AuthenticationFilter extends AbstractGatewayFilterFactory<AuthenticationFilter.Config> {
    @Autowired
    private RouteValidator validator;
    @Autowired
    private JwtUtils jwtUtils;

    public AuthenticationFilter() {
        super(Config.class);
    }

    @Override
    public GatewayFilter apply(Config config) {
        return ((exchange, chain) -> {
            ServerHttpRequest request = null;

            if(validator.isSecured.test(exchange.getRequest())) {
                if(!exchange.getRequest().getHeaders().containsKey(HttpHeaders.AUTHORIZATION)) {
                    throw new MissingAuthHeaderException("Missing auth header");
                }

                String authHeader = exchange.getRequest().getHeaders().get(HttpHeaders.AUTHORIZATION).get(0);
                if(authHeader != null && authHeader.startsWith("Bearer ")) {
                    authHeader = authHeader.substring(7);
                }

                try {
                    Claims claims = jwtUtils.validateJwtToken(authHeader);

                    String authorities = (String) claims.get("authorities");
                    List<String> roles = List.of(authorities.split(","));

                    request = exchange.getRequest().mutate()
                            .header("userId", ""+ jwtUtils.getUserIdFromJwtToken(claims))
                            .header("email", jwtUtils.getUsernameFromJwtToken(claims))
                            .header("roles", authorities)
                            .build();

                    if(!roles.contains(config.requiredRole)) {
                        throw new RoleNotAuthorizedException("Role not authorized to access the resource. Only " + config.requiredRole + " can access the resource.");
                    }

                } catch(ExpiredJwtException ej) {
                    throw new InvalidAccessTokenException("Access Token Expired!");
                } catch (RoleNotAuthorizedException re) {
                    throw new RoleNotAuthorizedException("Role not authorized to access the resource. Only " + config.requiredRole + " can access the resource.");
                } catch (Exception e) {
                    throw new InvalidAccessTokenException("Access Token validation failed!");
                }
            }

            return chain.filter(exchange.mutate().request(request).build());
        });
    }

    public static class Config {
        private String requiredRole;

        public String getRequiredRole() {
            return requiredRole;
        }

        public void setRequiredRole(String requiredRole) {
            this.requiredRole = requiredRole;
        }
    }
}
