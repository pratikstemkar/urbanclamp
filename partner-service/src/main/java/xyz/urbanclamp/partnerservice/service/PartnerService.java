package xyz.urbanclamp.partnerservice.service;

import xyz.urbanclamp.partnerservice.dto.PartnerCreateDTO;
import xyz.urbanclamp.partnerservice.dto.PartnerUpdateDTO;
import xyz.urbanclamp.partnerservice.model.Partner;

import java.util.List;

public interface PartnerService {
    List<Partner> getAllPartners();
    Partner getPartnerById(Long id);
    Partner getPartnerByEmail(String email);
    Partner createPartner(PartnerCreateDTO partnerCreateDTO);
    Partner updatePartner(Long id, PartnerUpdateDTO partnerUpdateDTO);
    void deletePartner(Long id);
}
