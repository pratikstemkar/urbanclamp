package xyz.urbanclamp.userservice.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import xyz.urbanclamp.basedomains.dto.user.AddressCreateDTO;
import xyz.urbanclamp.basedomains.dto.user.AddressUpdateDTO;
import xyz.urbanclamp.userservice.model.Address;
import xyz.urbanclamp.userservice.service.AddressService;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/addresses")
public class AddressController {
    private final AddressService addressService;

    @GetMapping
    public ResponseEntity<List<Address>> getAllAddresses() {
        return ResponseEntity.ok(addressService.getAllAddresses());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Address> getAddressById(@PathVariable Long id) {
        return ResponseEntity.ok(addressService.getAddressById(id));
    }

    @GetMapping("/search")
    public ResponseEntity<List<Address>> getAddressesByUserId(@RequestParam Long userId) {
        return ResponseEntity.ok(addressService.getAddressesByUserId(userId));
    }

    @PostMapping
    public ResponseEntity<Address> addAddress(@RequestBody AddressCreateDTO addressCreateDTO) {
        return ResponseEntity.status(HttpStatus.CREATED).body(addressService.addAddress(addressCreateDTO));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Address> updateAddress(@PathVariable Long id, @RequestBody AddressUpdateDTO addressUpdateDTO) {
        return ResponseEntity.ok(addressService.updateAddress(id, addressUpdateDTO));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAddress(@PathVariable Long id) {
        addressService.deleteAddress(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
