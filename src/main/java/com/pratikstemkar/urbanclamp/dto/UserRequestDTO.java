package com.pratikstemkar.urbanclamp.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class UserRequestDTO {
    private String firstName;
    private String lastName;
    private String email;
    private String password;
}
