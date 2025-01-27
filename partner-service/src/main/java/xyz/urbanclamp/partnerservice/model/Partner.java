package xyz.urbanclamp.partnerservice.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "partners")
public class Partner extends BaseAuditEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "partner_id")
    private Long id;

    @Column(name = "user_id")
    private Long userId;

    @Column(name = "name", length = 50)
    private String name;

    @Column(name = "email", unique = true, nullable = false, length = 100)
    private String email;

    @Column(name = "location")
    private String location;

    @Column(name = "service_pin_code")
    private String servicePinCode;

    @Builder.Default
    @Enumerated(EnumType.STRING)
    @Column(name = "partner_status")
    private PartnerStatus partnerStatus = PartnerStatus.ACTIVE;

    @Builder.Default
    @OneToMany(mappedBy = "partner", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private List<Service> services = new ArrayList<>();
}
