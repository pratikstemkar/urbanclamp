package xyz.urbanclamp.bookingservice.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import xyz.urbanclamp.bookingservice.dto.BookingCreateDTO;
import xyz.urbanclamp.bookingservice.dto.BookingUpdateDTO;
import xyz.urbanclamp.bookingservice.model.Booking;
import xyz.urbanclamp.bookingservice.service.BookingService;

import java.util.List;

@RestController
@RequestMapping("/api/bookings")
@RequiredArgsConstructor
public class BookingController {
    private final BookingService bookingService;

    @GetMapping
    public ResponseEntity<List<Booking>> getAllBookings() {
        return ResponseEntity.ok(bookingService.getAllBookings());
    }

    @GetMapping("/search/user")
    public ResponseEntity<List<Booking>> getBookingsByUserId(@RequestParam Long userId) {
        return ResponseEntity.ok(bookingService.getBookingsByUser(userId));
    }

    @GetMapping("/search/partner")
    public ResponseEntity<List<Booking>> getBookingsByPartnerId(@RequestParam Long partnerId) {
        return ResponseEntity.ok(bookingService.getBookingsByPartner(partnerId));
    }

    @GetMapping("/search/service")
    public ResponseEntity<List<Booking>> getBookingsByServiceId(@RequestParam Long serviceId) {
        return ResponseEntity.ok(bookingService.getBookingsByService(serviceId));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Booking> getBookingById(@PathVariable Long id) {
        return ResponseEntity.ok(bookingService.getBookingById(id));
    }

    @PostMapping
    public ResponseEntity<Booking> createBooking(@RequestBody BookingCreateDTO bookingCreateDTO) {
        return ResponseEntity.status(HttpStatus.CREATED).body(bookingService.createBooking(bookingCreateDTO));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Booking> updateBooking(@PathVariable Long id, @RequestBody BookingUpdateDTO bookingUpdateDTO) {
        return ResponseEntity.ok(bookingService.updateBooking(id, bookingUpdateDTO));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBooking(@PathVariable Long id) {
        bookingService.deleteBooking(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
