package xyz.urbanclamp.partnerservice.service;

import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import xyz.urbanclamp.partnerservice.client.UserClient;
import xyz.urbanclamp.partnerservice.dto.AddRoleToUserDTO;
import xyz.urbanclamp.partnerservice.dto.PartnerCreateDTO;
import xyz.urbanclamp.partnerservice.dto.PartnerUpdateDTO;
import xyz.urbanclamp.partnerservice.exception.PartnerNotFoundException;
import xyz.urbanclamp.partnerservice.model.Partner;
import xyz.urbanclamp.partnerservice.model.PartnerStatus;
import xyz.urbanclamp.partnerservice.repository.PartnerRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class PartnerServiceImpl implements PartnerService {
    private final PartnerRepository partnerRepository;
    private final ModelMapper modelMapper;
    private final UserClient userClient;

    @Override
    public List<Partner> getAllPartners() {
        return partnerRepository.findAll();
    }

    @Override
    public Partner getPartnerById(Long id) {
        return partnerRepository.findById(id).orElseThrow(() -> new PartnerNotFoundException("Partner not found with ID: " + id));
    }

    @Override
    public Partner getPartnerByEmail(String email) {
        return partnerRepository.findByEmail(email).orElseThrow(() -> new PartnerNotFoundException("Partner not found with Email: " + email));
    }

    @Override
    public Partner createPartner(PartnerCreateDTO partnerCreateDTO) {
        Partner partner = modelMapper.map(partnerCreateDTO, Partner.class);
        partner.setId(null);
        userClient.addRoleToUser(AddRoleToUserDTO.builder().userId(partnerCreateDTO.getUserId()).roleName("ROLE_PARTNER").build());
        return partnerRepository.save(partner);
    }

    @Override
    public Partner updatePartner(Long id, PartnerUpdateDTO partnerUpdateDTO) {
        Partner partner = getPartnerById(id);
        partner.setName(partnerUpdateDTO.getName());
        partner.setEmail(partnerUpdateDTO.getEmail());
        partner.setLocation(partnerUpdateDTO.getLocation());
        partner.setServicePinCode(partnerUpdateDTO.getServicePinCode());
        partner.setPartnerStatus(PartnerStatus.valueOf(partnerUpdateDTO.getPartnerStatus()));
        return partnerRepository.save(partner);
    }

    @Override
    public void deletePartner(Long id) {
        if(!partnerRepository.existsById(id))
            throw new PartnerNotFoundException("Partner not found with ID: " + id);
        partnerRepository.deleteById(id);
    }
}
