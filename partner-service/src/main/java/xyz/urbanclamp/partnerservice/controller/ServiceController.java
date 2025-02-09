package xyz.urbanclamp.partnerservice.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import xyz.urbanclamp.partnerservice.dto.ServiceCreateDTO;
import xyz.urbanclamp.partnerservice.dto.ServiceUpdateDTO;
import xyz.urbanclamp.partnerservice.model.Service;
import xyz.urbanclamp.partnerservice.service.ServiceService;

@RestController
@RequestMapping("/api/services")
@RequiredArgsConstructor
public class ServiceController {
    private final ServiceService serviceService;

    @GetMapping
    public ResponseEntity<Page<Service>> getAllServices(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "id") String sortBy,
            @RequestParam(defaultValue = "asc") String sortDir
    ) {
        return ResponseEntity.ok(serviceService.getAllServices(page, size, sortBy, sortDir));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Service> getServiceById(@PathVariable Long id) {
        return ResponseEntity.ok(serviceService.getServiceById(id));
    }

    @PostMapping
    public ResponseEntity<Service> createService(@RequestBody ServiceCreateDTO serviceCreateDTO) {
        return ResponseEntity.status(HttpStatus.CREATED).body(serviceService.createService(serviceCreateDTO));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Service> updateService(@PathVariable Long id, @RequestBody ServiceUpdateDTO serviceUpdateDTO) {
        return ResponseEntity.ok(serviceService.updateService(id, serviceUpdateDTO));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteService(@PathVariable Long id) {
        serviceService.deleteService(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
