package xyz.urbanclamp.gateway.exception;

public class MissingAuthHeaderException extends RuntimeException {
    public MissingAuthHeaderException(String message) {
        super(message);
    }
}
