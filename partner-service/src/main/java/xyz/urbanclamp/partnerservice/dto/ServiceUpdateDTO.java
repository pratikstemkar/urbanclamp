package xyz.urbanclamp.partnerservice.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ServiceUpdateDTO {
    private Long id;
    private String title;
    private String description;
    private String picture;
    private Integer duration;
    private Double price;
    private Long categoryId;
    private Long partnerId;
}
