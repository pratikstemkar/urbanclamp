package xyz.urbanclamp.partnerservice.service;

import xyz.urbanclamp.basedomains.dto.partner.PartnerCreateDTO;
import xyz.urbanclamp.basedomains.dto.partner.PartnerUpdateDTO;
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
