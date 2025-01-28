package xyz.urbanclamp.userservice.service;

import xyz.urbanclamp.basedomains.dto.user.AddressCreateDTO;
import xyz.urbanclamp.basedomains.dto.user.AddressUpdateDTO;
import xyz.urbanclamp.userservice.model.Address;

import java.util.List;

public interface AddressService {
    List<Address> getAllAddresses();
    Address getAddressById(Long id);
    List<Address> getAddressesByUserId(Long userId);
    Address addAddress(AddressCreateDTO addressCreateDTO);
    Address updateAddress(Long id, AddressUpdateDTO addressUpdateDTO);
    void deleteAddress(Long id);
}
