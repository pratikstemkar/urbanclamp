package xyz.urbanclamp.partnerservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import xyz.urbanclamp.partnerservice.model.Availability;
import xyz.urbanclamp.partnerservice.model.Partner;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface AvailabilityRepository extends JpaRepository<Availability, Long> {
    List<Availability> findByPartner(Partner partner);
    List<Availability> findByPartnerAndAvailableDate(Partner partner, LocalDate availableDate);
}
