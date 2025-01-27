package xyz.urbanclamp.basedomains.dto.partner;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PartnerCreateDTO {
    private Long userId;
    private String name;
    private String email;
    private String location;
    private String servicePinCode;
}
