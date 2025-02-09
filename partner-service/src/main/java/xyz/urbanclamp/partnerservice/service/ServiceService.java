package xyz.urbanclamp.partnerservice.service;

import org.springframework.data.domain.Page;
import xyz.urbanclamp.partnerservice.dto.ServiceCreateDTO;
import xyz.urbanclamp.partnerservice.dto.ServiceUpdateDTO;
import xyz.urbanclamp.partnerservice.model.Category;
import xyz.urbanclamp.partnerservice.model.Service;

import java.util.List;

public interface ServiceService {
    Page<Service> getAllServices(int page, int size, String sortBy, String sortDir);
    Service getServiceById(Long id);
    List<Service> getServicesByCategory(Long categoryId);
    Service createService(ServiceCreateDTO serviceCreateDTO);
    Service updateService(Long id, ServiceUpdateDTO serviceUpdateDTO);
    void deleteService(Long id);
}
