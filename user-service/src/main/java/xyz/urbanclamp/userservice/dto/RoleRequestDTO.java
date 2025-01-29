package xyz.urbanclamp.userservice.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class RoleRequestDTO {
    private String name;
    private String description;
}
