package xyz.urbanclamp.partnerservice.service;

import xyz.urbanclamp.basedomains.dto.partner.AvailabilityCreateDTO;
import xyz.urbanclamp.basedomains.dto.partner.AvailabilityUpdateDTO;
import xyz.urbanclamp.partnerservice.model.Availability;

import java.time.LocalDate;
import java.util.List;

public interface AvailabilityService {
    List<Availability> getAllAvailabilities();
    List<Availability> getAvailabilityByPartner(Long partnerId);
    List<Availability> getAvailabilityByPartnerAndDate(Long partnerId, LocalDate date);
    Availability getAvailabilityById(Long id);
    Availability createAvailability(AvailabilityCreateDTO availabilityCreateDTO);
    Availability updateAvailability(Long id, AvailabilityUpdateDTO availabilityUpdateDTO);
    Availability addTimeSlot(Long id, String timeSlot);
    Availability removeTimeSlot(Long id, String timeSlot);
    void deleteAvailability(Long id);
}
