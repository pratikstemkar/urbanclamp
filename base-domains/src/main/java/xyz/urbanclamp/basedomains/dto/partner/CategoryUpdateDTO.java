package xyz.urbanclamp.basedomains.dto.partner;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CategoryUpdateDTO {
    private Long id;
    private String title;
    private String description;
    private String picture;
}
