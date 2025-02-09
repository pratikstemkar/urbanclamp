package xyz.urbanclamp.bookingservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import xyz.urbanclamp.bookingservice.model.Booking;

import java.util.List;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Long> {
    List<Booking> findByUserId(Long userId);
    List<Booking> findByPartnerId(Long partnerId);
    List<Booking> findByServiceId(Long serviceId);
}
