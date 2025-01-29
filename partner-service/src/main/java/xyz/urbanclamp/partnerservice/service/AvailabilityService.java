package xyz.urbanclamp.partnerservice.service;

import xyz.urbanclamp.partnerservice.dto.AvailabilityCreateDTO;
import xyz.urbanclamp.partnerservice.dto.AvailabilityUpdateDTO;
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
