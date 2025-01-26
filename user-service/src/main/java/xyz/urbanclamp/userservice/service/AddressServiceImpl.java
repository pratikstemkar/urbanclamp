package xyz.urbanclamp.userservice.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import xyz.urbanclamp.basedomains.dto.AddressCreateDTO;
import xyz.urbanclamp.basedomains.dto.AddressUpdateDTO;
import xyz.urbanclamp.userservice.exception.AddressNotFoundException;
import xyz.urbanclamp.userservice.model.Address;
import xyz.urbanclamp.userservice.model.User;
import xyz.urbanclamp.userservice.repository.AddressRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AddressServiceImpl implements AddressService {
    private final AddressRepository addressRepository;
    private final UserService userService;

    @Override
    public List<Address> getAllAddresses() {
        return addressRepository.findAll();
    }

    @Override
    public Address getAddressById(Long id) {
        return addressRepository.findById(id).orElseThrow(() -> new AddressNotFoundException("Address not found with ID: " + id));
    }

    @Override
    public List<Address> getAddressesByUserId(Long userId) {
        User user = userService.getUserById(userId);
        return addressRepository.findByUser(user);
    }

    @Override
    public Address addAddress(AddressCreateDTO addressCreateDTO) {
        User user = userService.getUserById(addressCreateDTO.getUserId());
        Address address = Address.builder()
                .street(addressCreateDTO.getStreet())
                .city(addressCreateDTO.getCity())
                .state(addressCreateDTO.getState())
                .pinCode(addressCreateDTO.getPinCode())
                .user(user)
                .build();
        return addressRepository.save(address);
    }

    @Override
    public Address updateAddress(Long id, AddressUpdateDTO addressUpdateDTO) {
        Address address = getAddressById(id);
        address.setStreet(addressUpdateDTO.getStreet());
        address.setCity(addressUpdateDTO.getCity());
        address.setStreet(addressUpdateDTO.getStreet());
        address.setPinCode(addressUpdateDTO.getPinCode());
        return addressRepository.save(address);
    }

    @Override
    public void deleteAddress(Long id) {
        if(!addressRepository.existsById(id))
            throw new AddressNotFoundException("Address not found with ID: " + id);
        addressRepository.deleteById(id);
    }
}
