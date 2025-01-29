package xyz.urbanclamp.userservice.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserRequestDTO {
    private String name;
    private String email;
    private String password;}
