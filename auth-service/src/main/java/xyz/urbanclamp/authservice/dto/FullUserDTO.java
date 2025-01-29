package xyz.urbanclamp.authservice.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class FullUserDTO {
    private Long id;
    private String name;
    private String email;
    private String password;
    private String phoneNumber;
    private Set<String> roles;
    private String status;
    private String gender;
    private String picture;
}
