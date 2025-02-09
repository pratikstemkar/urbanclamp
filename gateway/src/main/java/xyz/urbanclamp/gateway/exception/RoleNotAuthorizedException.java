package xyz.urbanclamp.gateway.exception;

public class RoleNotAuthorizedException extends RuntimeException {
    public RoleNotAuthorizedException(String message) {
        super(message);
    }
}
