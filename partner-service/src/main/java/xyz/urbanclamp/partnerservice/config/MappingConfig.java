package xyz.urbanclamp.partnerservice.config;

import org.modelmapper.Conditions;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import xyz.urbanclamp.partnerservice.dto.ServiceCreateDTO;
import xyz.urbanclamp.partnerservice.model.Service;

@Configuration
public class MappingConfig {

    @Bean
    ModelMapper modelMapper() {
        ModelMapper modelMapper = new ModelMapper();

        modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT).setPropertyCondition(Conditions.isNotNull());

        modelMapper.typeMap(ServiceCreateDTO.class, Service.class)
                .addMappings(mapper -> {
                    mapper.skip(Service::setCategory);
                    mapper.skip(Service::setPartner);
                    mapper.skip(Service::setId);
                });

        return modelMapper;
    }
}
