package xyz.urbanclamp.basedomains.dto.user;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class RoleRequestDTO {
    private String name;
    private String description;
}
