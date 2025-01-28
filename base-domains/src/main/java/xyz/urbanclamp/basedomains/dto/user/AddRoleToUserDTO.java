package xyz.urbanclamp.basedomains.dto.user;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AddRoleToUserDTO {
    private Long userId;
    private String roleName;
}
