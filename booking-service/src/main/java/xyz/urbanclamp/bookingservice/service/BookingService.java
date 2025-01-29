package xyz.urbanclamp.bookingservice.service;

import xyz.urbanclamp.bookingservice.dto.BookingCreateDTO;
import xyz.urbanclamp.bookingservice.dto.BookingUpdateDTO;
import xyz.urbanclamp.bookingservice.model.Booking;

import java.util.List;

public interface BookingService {
    List<Booking> getAllBookings();
    List<Booking> getBookingsByUser(Long userId);
    List<Booking> getBookingsByPartner(Long partnerId);
    List<Booking> getBookingsByService(Long serviceId);
    Booking getBookingById(Long id);
    Booking createBooking(BookingCreateDTO bookingCreateDTO);
    Booking updateBooking(Long id, BookingUpdateDTO bookingUpdateDTO);
    void deleteBooking(Long id);
}
