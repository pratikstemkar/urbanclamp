package xyz.urbanclamp.userservice.service;

import xyz.urbanclamp.basedomains.dto.user.RoleRequestDTO;
import xyz.urbanclamp.basedomains.dto.user.RoleUpdateDTO;
import xyz.urbanclamp.userservice.model.Role;

import java.util.List;

public interface RoleService {
    List<Role> findAllRoles();
    Role findRoleByName(String name);
    Role createRole(RoleRequestDTO roleRequestDTO);
    Role updateRole(Long id, RoleUpdateDTO roleUpdateDTO);
    void deleteRole(String name);
}
