package xyz.urbanclamp.partnerservice.service;

import org.springframework.data.domain.Page;
import xyz.urbanclamp.basedomains.dto.partner.ServiceCreateDTO;
import xyz.urbanclamp.basedomains.dto.partner.ServiceUpdateDTO;
import xyz.urbanclamp.partnerservice.model.Service;

public interface ServiceService {
    Page<Service> getAllServices(int page, int size, String sortBy, String sortDir);
    Service getServiceById(Long id);
    Service createService(ServiceCreateDTO serviceCreateDTO);
    Service updateService(Long id, ServiceUpdateDTO serviceUpdateDTO);
    void deleteService(Long id);
}
