package xyz.urbanclamp.userservice.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import xyz.urbanclamp.userservice.dto.RoleRequestDTO;
import xyz.urbanclamp.userservice.dto.RoleUpdateDTO;
import xyz.urbanclamp.userservice.exception.RoleNotFoundException;
import xyz.urbanclamp.userservice.model.Role;
import xyz.urbanclamp.userservice.repository.RoleRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class RoleServiceImpl implements RoleService {
    private final RoleRepository roleRepository;

    @Override
    public List<Role> findAllRoles() {
        return roleRepository.findAll();
    }

    @Override
    public Role findRoleByName(String name) {
        return roleRepository.findByName(name).orElseThrow(() -> new RoleNotFoundException("Role not found with Name: " + name));
    }

    @Override
    public Role createRole(RoleRequestDTO roleRequestDTO) {
        Role role = new Role();
        role.setName(roleRequestDTO.getName());
        role.setDescription(roleRequestDTO.getDescription());
        return roleRepository.save(role);
    }

    @Override
    public Role updateRole(Long id, RoleUpdateDTO roleUpdateDTO) {
        Role role = roleRepository.findById(id).orElseThrow(() -> new RoleNotFoundException("Role not found with ID: " + id));
        role.setName(roleUpdateDTO.getName());
        role.setDescription(roleUpdateDTO.getDescription());
        return roleRepository.save(role);
    }

    @Override
    public void deleteRole(String name) {
        roleRepository.deleteByName(name);
    }
}
