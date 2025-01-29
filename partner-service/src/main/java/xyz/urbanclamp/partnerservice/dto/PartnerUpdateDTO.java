package xyz.urbanclamp.partnerservice.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PartnerUpdateDTO {
    private Long id;
    private Long userId;
    private String name;
    private String email;
    private String location;
    private String servicePinCode;
    private String partnerStatus;
}
