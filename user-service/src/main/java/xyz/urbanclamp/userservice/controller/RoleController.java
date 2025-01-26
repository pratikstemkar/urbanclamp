package xyz.urbanclamp.userservice.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import xyz.urbanclamp.basedomains.dto.RoleRequestDTO;
import xyz.urbanclamp.userservice.model.Role;
import xyz.urbanclamp.userservice.service.RoleService;

import java.util.List;

@RestController
@RequestMapping("/api/roles")
public class RoleController {
    private final RoleService roleService;

    public RoleController(RoleService roleService) {
        this.roleService = roleService;
    }

    @GetMapping
    public ResponseEntity<List<Role>> getAllRoles() {
        return ResponseEntity.status(HttpStatus.OK).body(roleService.findAllRoles());
    }

    @GetMapping("/{name}")
    public ResponseEntity<Role> getRoleByName(@PathVariable String name) {
        return ResponseEntity.status(HttpStatus.OK).body(roleService.findRoleByName(name));
    }

    @PostMapping
    public ResponseEntity<Role> createRole(@RequestBody RoleRequestDTO roleRequestDTO) {
        return new ResponseEntity<>(roleService.createRole(roleRequestDTO), HttpStatus.CREATED);
    }

    @DeleteMapping("/{name}")
    public ResponseEntity<Void> deleteRole(@PathVariable String name) {
        roleService.deleteRole(name);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
