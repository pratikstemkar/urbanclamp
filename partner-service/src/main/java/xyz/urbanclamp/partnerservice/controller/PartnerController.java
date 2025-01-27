package xyz.urbanclamp.partnerservice.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import xyz.urbanclamp.basedomains.dto.partner.PartnerCreateDTO;
import xyz.urbanclamp.basedomains.dto.partner.PartnerUpdateDTO;
import xyz.urbanclamp.partnerservice.model.Partner;
import xyz.urbanclamp.partnerservice.service.PartnerService;

import java.util.List;

@RestController
@RequestMapping("/api/partners")
@RequiredArgsConstructor
public class PartnerController {
    private final PartnerService partnerService;

    @GetMapping
    public ResponseEntity<List<Partner>> getAllPartners() {
        return ResponseEntity.ok(partnerService.getAllPartners());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Partner> getPartnerById(@PathVariable Long id) {
        return ResponseEntity.ok(partnerService.getPartnerById(id));
    }

    @GetMapping("/search")
    public ResponseEntity<Partner> getPartnerByEmail(@RequestParam String email) {
        return ResponseEntity.ok(partnerService.getPartnerByEmail(email));
    }

    @PostMapping
    public ResponseEntity<Partner> createPartner(@RequestBody PartnerCreateDTO partnerCreateDTO) {
        return ResponseEntity.status(HttpStatus.CREATED).body(partnerService.createPartner(partnerCreateDTO));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Partner> updatePartner(@PathVariable Long id, @RequestBody PartnerUpdateDTO partnerUpdateDTO) {
        return ResponseEntity.ok(partnerService.updatePartner(id, partnerUpdateDTO));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePartner(@PathVariable Long id) {
        partnerService.deletePartner(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
