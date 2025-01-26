package xyz.urbanclamp.userservice.config;

import org.modelmapper.Converter;
import org.modelmapper.ModelMapper;
import org.modelmapper.spi.MappingContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import xyz.urbanclamp.basedomains.dto.FullUserDTO;
import xyz.urbanclamp.basedomains.dto.UserDTO;
import xyz.urbanclamp.userservice.model.Role;
import xyz.urbanclamp.userservice.model.User;

import java.util.Set;
import java.util.stream.Collectors;

@Configuration
public class MappingConfig {

    @Bean
    ModelMapper modelMapper() {
        ModelMapper modelMapper = new ModelMapper();

        Converter<Set<Role>, Set<String>> rolesConverter = new Converter<Set<Role>, Set<String>>() {
            @Override
            public Set<String> convert(MappingContext<Set<Role>, Set<String>> mappingContext) {
                return mappingContext.getSource().stream()
                        .map(Role::getName)
                        .collect(Collectors.toSet());
            }
        };

        modelMapper.typeMap(User.class, UserDTO.class)
                .addMappings(mapper -> mapper.using(rolesConverter).map(User::getRoles, UserDTO::setRoles));
        modelMapper.typeMap(User.class, FullUserDTO.class)
                .addMappings(mapper -> mapper.using(rolesConverter).map(User::getRoles, FullUserDTO::setRoles));

        return modelMapper;
    }
}
