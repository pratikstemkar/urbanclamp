package xyz.urbanclamp.partnerservice.service;

import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import xyz.urbanclamp.basedomains.dto.partner.AvailabilityCreateDTO;
import xyz.urbanclamp.basedomains.dto.partner.AvailabilityUpdateDTO;
import xyz.urbanclamp.partnerservice.exception.AvailabilityNotFoundException;
import xyz.urbanclamp.partnerservice.model.Availability;
import xyz.urbanclamp.partnerservice.model.Partner;
import xyz.urbanclamp.partnerservice.repository.AvailabilityRepository;

import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AvailabilityServiceImpl implements AvailabilityService {
    private final AvailabilityRepository availabilityRepository;
    private final PartnerService partnerService;
    private final ModelMapper modelMapper;

    @Override
    public List<Availability> getAllAvailabilities() {
        return availabilityRepository.findAll();
    }

    @Override
    public List<Availability> getAvailabilityByPartner(Long partnerId) {
        Partner partner = partnerService.getPartnerById(partnerId);
        return availabilityRepository.findByPartner(partner);
    }

    @Override
    public List<Availability> getAvailabilityByPartnerAndDate(Long partnerId, LocalDate date) {
        Partner partner = partnerService.getPartnerById(partnerId);
        return availabilityRepository.findByPartnerAndAvailableDate(partner, date);
    }

    @Override
    public Availability getAvailabilityById(Long id) {
        return availabilityRepository.findById(id).orElseThrow(() -> new AvailabilityNotFoundException("Availability not found with ID: " + id));
    }

    @Override
    public Availability createAvailability(AvailabilityCreateDTO availabilityCreateDTO) {
        Availability availability = modelMapper.map(availabilityCreateDTO, Availability.class);
        Partner partner = partnerService.getPartnerById(availabilityCreateDTO.getPartnerId());
        availability.setPartner(partner);
        return availabilityRepository.save(availability);
    }

    @Override
    public Availability updateAvailability(Long id, AvailabilityUpdateDTO availabilityUpdateDTO) {
        Availability availability = getAvailabilityById(id);
        availability.setAvailableDate(availabilityUpdateDTO.getAvailableDate());
        availability.setAvailableTimeSlots(availabilityUpdateDTO.getAvailableTimeSlots());
        return availabilityRepository.save(availability);
    }

    @Override
    public Availability addTimeSlot(Long id, String timeSlot) {
        Availability availability = getAvailabilityById(id);
        availability.getAvailableTimeSlots().add(timeSlot);
        return availabilityRepository.save(availability);
    }

    @Override
    public Availability removeTimeSlot(Long id, String timeSlot) {
        Availability availability = getAvailabilityById(id);
        availability.getAvailableTimeSlots().remove(timeSlot);
        return availabilityRepository.save(availability);
    }

    @Override
    public void deleteAvailability(Long id) {
        if(!availabilityRepository.existsById(id))
            throw new AvailabilityNotFoundException("Availability not found with ID: " + id);
        availabilityRepository.deleteById(id);
    }
}
