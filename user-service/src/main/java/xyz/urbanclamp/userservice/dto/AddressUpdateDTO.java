package xyz.urbanclamp.userservice.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AddressUpdateDTO {
    private Long id;
    private String street;
    private String city;
    private String state;
    private String pinCode;
    private Long userId;
}
