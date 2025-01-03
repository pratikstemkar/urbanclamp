package xyz.urbanclamp.userservice.service;

import org.apache.kafka.common.errors.ResourceNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import xyz.urbanclamp.userservice.dto.RoleRequestDTO;
import xyz.urbanclamp.userservice.model.Role;
import xyz.urbanclamp.userservice.repository.RoleRepository;

import java.util.List;

@Service
public class RoleServiceImpl implements RoleService {
    private final RoleRepository roleRepository;

    public RoleServiceImpl(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }

    @Override
    public List<Role> findAllRoles() {
        return roleRepository.findAll();
    }

    @Override
    public Role findRoleByName(String name) {
        return roleRepository.findByName(name).orElseThrow(() -> new ResourceNotFoundException("Role not found with Name: " + name));
    }

    @Override
    public Role createRole(RoleRequestDTO roleRequestDTO) {
        Role role = new Role();
        role.setName(roleRequestDTO.getName());
        role.setDescription(roleRequestDTO.getDescription());
        return roleRepository.save(role);
    }

    @Override
    public void deleteRole(String name) {
        roleRepository.deleteByName(name);
    }
}
