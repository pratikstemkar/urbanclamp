package xyz.urbanclamp.gateway.filter;

import io.jsonwebtoken.Claims;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.gateway.filter.GatewayFilter;
import org.springframework.cloud.gateway.filter.factory.AbstractGatewayFilterFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.stereotype.Component;
import xyz.urbanclamp.gateway.exception.InvalidAccessTokenException;
import xyz.urbanclamp.gateway.exception.MissingAuthHeaderException;
import xyz.urbanclamp.gateway.utils.JwtUtils;

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

                    request = exchange.getRequest().mutate()
                            .header("userId", ""+ jwtUtils.getUserIdFromJwtToken(claims))
                            .header("email", jwtUtils.getUsernameFromJwtToken(claims))
                            .build();


                } catch (Exception e) {
                    throw new InvalidAccessTokenException("Token validate error gateway filter");
                }
            }
            return chain.filter(exchange.mutate().request(request).build());
        });
    }

    public static class Config {

    }
}
