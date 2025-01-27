package xyz.urbanclamp.partnerservice.service;

import xyz.urbanclamp.basedomains.dto.partner.ServiceCreateDTO;
import xyz.urbanclamp.basedomains.dto.partner.ServiceUpdateDTO;
import xyz.urbanclamp.partnerservice.model.Service;

import java.util.List;

public interface ServiceService {
    List<Service> getAllServices();
    Service getServiceById(Long id);
    Service createService(ServiceCreateDTO serviceCreateDTO);
    Service updateService(Long id, ServiceUpdateDTO serviceUpdateDTO);
    void deleteService(Long id);
}
