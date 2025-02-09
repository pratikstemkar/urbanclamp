package xyz.urbanclamp.partnerservice.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import xyz.urbanclamp.partnerservice.dto.AvailabilityCreateDTO;
import xyz.urbanclamp.partnerservice.dto.AvailabilityUpdateDTO;
import xyz.urbanclamp.partnerservice.model.Availability;
import xyz.urbanclamp.partnerservice.service.AvailabilityService;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/availabilities")
@RequiredArgsConstructor
public class AvailabilityController {
    private final AvailabilityService availabilityService;

    @GetMapping
    public ResponseEntity<List<Availability>> getAllAvailabilities() {
        return ResponseEntity.ok(availabilityService.getAllAvailabilities());
    }

    @GetMapping("/partner/{partnerId}")
    public ResponseEntity<List<Availability>> getAvailabilityByPartner(@PathVariable Long partnerId) {
        return ResponseEntity.ok(availabilityService.getAvailabilityByPartner(partnerId));
    }

    @GetMapping("/search")
    public ResponseEntity<List<Availability>> getAvailabilityByPartnerAndDate(@RequestParam Long partnerId, @RequestParam LocalDate date) {
        return ResponseEntity.ok(availabilityService.getAvailabilityByPartnerAndDate(partnerId, date));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Availability> getAvailabilityById(@PathVariable Long id) {
        return ResponseEntity.ok(availabilityService.getAvailabilityById(id));
    }

    @PostMapping
    public ResponseEntity<Availability> createAvailability(@RequestBody AvailabilityCreateDTO availabilityCreateDTO) {
        return ResponseEntity.status(HttpStatus.CREATED).body(availabilityService.createAvailability(availabilityCreateDTO));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Availability> updateAvailability(@PathVariable Long id, @RequestBody AvailabilityUpdateDTO availabilityUpdateDTO) {
        return ResponseEntity.ok(availabilityService.updateAvailability(id, availabilityUpdateDTO));
    }

    @PatchMapping("/add/{id}")
    public ResponseEntity<Availability> addTimeSlot(@PathVariable Long id, @RequestParam String timeSlot) {
        return ResponseEntity.ok(availabilityService.addTimeSlot(id, timeSlot));
    }

    @PatchMapping("/remove/{id}")
    public ResponseEntity<Availability> removeTimeSlot(@PathVariable Long id, @RequestParam String timeSlot) {
        return ResponseEntity.ok(availabilityService.removeTimeSlot(id, timeSlot));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAvailability(@PathVariable Long id) {
        availabilityService.deleteAvailability(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
