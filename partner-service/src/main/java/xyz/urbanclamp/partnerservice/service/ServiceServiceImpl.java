package xyz.urbanclamp.partnerservice.service;

import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.transaction.annotation.Transactional;
import xyz.urbanclamp.basedomains.dto.partner.ServiceCreateDTO;
import xyz.urbanclamp.basedomains.dto.partner.ServiceUpdateDTO;
import xyz.urbanclamp.partnerservice.exception.ServiceNotFoundException;
import xyz.urbanclamp.partnerservice.model.Category;
import xyz.urbanclamp.partnerservice.model.Partner;
import xyz.urbanclamp.partnerservice.model.Service;
import xyz.urbanclamp.partnerservice.repository.ServiceRepository;

import java.util.List;

@org.springframework.stereotype.Service
@RequiredArgsConstructor
@Transactional
public class ServiceServiceImpl implements ServiceService {
    private final CategoryService categoryService;
    private final PartnerService partnerService;
    private final ServiceRepository serviceRepository;
    private final ModelMapper modelMapper;

    @Override
    public List<Service> getAllServices() {
        return serviceRepository.findAll();
    }

    @Override
    public Service getServiceById(Long id) {
        return serviceRepository.findById(id).orElseThrow(() -> new ServiceNotFoundException("Service not found for ID: " + id));
    }

    @Override
    public Service createService(ServiceCreateDTO serviceCreateDTO) {
        Service service = modelMapper.map(serviceCreateDTO, Service.class);
        Category category = categoryService.getCategoryById(serviceCreateDTO.getCategoryId());
        Partner partner = partnerService.getPartnerById(serviceCreateDTO.getPartnerId());
        service.setCategory(category);
        service.setPartner(partner);
        service.setId(null);
        return serviceRepository.save(service);
    }

    @Override
    public Service updateService(Long id, ServiceUpdateDTO serviceUpdateDTO) {
        Service service = modelMapper.map(serviceUpdateDTO, Service.class);
        Category category = categoryService.getCategoryById(serviceUpdateDTO.getCategoryId());
        Partner partner = partnerService.getPartnerById(serviceUpdateDTO.getPartnerId());
        service.setCategory(category);
        service.setPartner(partner);
        service.setTitle(serviceUpdateDTO.getTitle());
        service.setDescription(serviceUpdateDTO.getDescription());
        service.setPicture(serviceUpdateDTO.getPicture());
        service.setDuration(serviceUpdateDTO.getDuration());
        service.setPrice(serviceUpdateDTO.getPrice());
        return serviceRepository.save(service);
    }

    @Override
    public void deleteService(Long id) {
        if(!serviceRepository.existsById(id))
            throw new ServiceNotFoundException("Service not found with ID: " + id);
        serviceRepository.deleteById(id);
    }
}
