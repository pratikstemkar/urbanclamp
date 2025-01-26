package xyz.urbanclamp.userservice.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import xyz.urbanclamp.basedomains.dto.RoleRequestDTO;
import xyz.urbanclamp.basedomains.dto.RoleUpdateDTO;
import xyz.urbanclamp.userservice.model.Role;
import xyz.urbanclamp.userservice.service.RoleService;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/roles")
public class RoleController {
    private final RoleService roleService;

    @GetMapping
    public ResponseEntity<List<Role>> getAllRoles() {
        return ResponseEntity.ok(roleService.findAllRoles());
    }

    @GetMapping("/{name}")
    public ResponseEntity<Role> getRoleByName(@PathVariable String name) {
        return ResponseEntity.ok(roleService.findRoleByName(name));
    }

    @PostMapping
    public ResponseEntity<Role> createRole(@RequestBody RoleRequestDTO roleRequestDTO) {
        return ResponseEntity.status(HttpStatus.CREATED).body(roleService.createRole(roleRequestDTO));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Role> updateRole(@PathVariable Long id, @RequestBody RoleUpdateDTO roleUpdateDTO) {
        return ResponseEntity.ok(roleService.updateRole(id, roleUpdateDTO));
    }

    @DeleteMapping("/{name}")
    public ResponseEntity<Void> deleteRole(@PathVariable String name) {
        roleService.deleteRole(name);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
