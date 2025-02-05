package xyz.urbanclamp.bookingservice.service;

import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import xyz.urbanclamp.bookingservice.dto.BookingCreateDTO;
import xyz.urbanclamp.bookingservice.dto.BookingUpdateDTO;
import xyz.urbanclamp.bookingservice.exception.BookingNotFoundException;
import xyz.urbanclamp.bookingservice.model.Booking;
import xyz.urbanclamp.bookingservice.model.BookingStatus;
import xyz.urbanclamp.bookingservice.repository.BookingRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BookingServiceImpl implements BookingService {
    private final BookingRepository bookingRepository;
    private final ModelMapper modelMapper;

    @Override
    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }

    @Override
    public List<Booking> getBookingsByUser(Long userId) {
        return bookingRepository.findByUserId(userId);
    }

    @Override
    public List<Booking> getBookingsByPartner(Long partnerId) {
        return bookingRepository.findByPartnerId(partnerId);
    }

    @Override
    public List<Booking> getBookingsByService(Long serviceId) {
        return bookingRepository.findByServiceId(serviceId);
    }

    @Override
    public Booking getBookingById(Long id) {
        return bookingRepository.findById(id).orElseThrow(() -> new BookingNotFoundException("Booking not found with ID: " + id));
    }

    @Override
    public Booking createBooking(BookingCreateDTO bookingCreateDTO) {
        Booking booking = modelMapper.map(bookingCreateDTO, Booking.class);
        booking.setBookingStatus(BookingStatus.PROCESSING);
        return bookingRepository.save(booking);
    }

    @Override
    public Booking updateBooking(Long id, BookingUpdateDTO bookingUpdateDTO) {
        Booking booking = getBookingById(id);
        booking.setUserId(bookingUpdateDTO.getUserId());
        booking.setPartnerId(bookingUpdateDTO.getPartnerId());
        booking.setServiceId(bookingUpdateDTO.getServiceId());
        booking.setBookingDate(bookingUpdateDTO.getBookingDate());
        booking.setBookingStatus(BookingStatus.valueOf(bookingUpdateDTO.getBookingStatus()));
        booking.setTimeSlot(bookingUpdateDTO.getTimeSlot());
        booking.setAmount(bookingUpdateDTO.getAmount());
        return bookingRepository.save(booking);
    }

    @Override
    public Booking setBookingStatus(Long id, String status) {
        Booking booking = getBookingById(id);
        booking.setBookingStatus(BookingStatus.valueOf(status));
        return bookingRepository.save(booking);
    }

    @Override
    public void deleteBooking(Long id) {
        if(!bookingRepository.existsById(id))
            throw new BookingNotFoundException("Booking not found with ID: " + id);
        bookingRepository.deleteById(id);
    }
}
