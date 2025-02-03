package xyz.urbanclamp.userservice.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import xyz.urbanclamp.userservice.dto.AddRoleToUserDTO;
import xyz.urbanclamp.userservice.dto.FullUserDTO;
import xyz.urbanclamp.userservice.dto.UserDTO;
import xyz.urbanclamp.userservice.dto.UserRequestDTO;
import xyz.urbanclamp.userservice.kafka.UserProducer;
import xyz.urbanclamp.userservice.model.User;
import xyz.urbanclamp.userservice.service.UserService;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {
    private final UserService userService;
    private final UserProducer userProducer;

    public UserController(UserService userService, UserProducer userProducer) {
        this.userService = userService;
        this.userProducer = userProducer;
    }

    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        return ResponseEntity.status(HttpStatus.OK).body(userService.getAllUsers());
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        return ResponseEntity.ok(userService.getUserById(id));
    }

    @GetMapping("/search")
    public ResponseEntity<UserDTO> searchUserByEmail(@RequestParam String email) {
        return ResponseEntity.ok(userService.getUserByEmail(email));
    }

    @GetMapping("/fullSearch")
    public ResponseEntity<FullUserDTO> searchFullUserByEmail(@RequestParam String email) {
        return ResponseEntity.ok(userService.getFullUserByEmail(email));
    }

    @PostMapping
    public ResponseEntity<UserDTO> createUser(@RequestBody UserRequestDTO userRequestDTO) {
        UserDTO userDTO = userService.createUser(userRequestDTO);
        userProducer.sendMessage(userDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(userDTO);
    }

    @PutMapping("/{id}")
    public ResponseEntity<UserDTO> updateUser(@PathVariable Long id, @RequestBody UserDTO userDTO) {
        return ResponseEntity.status(HttpStatus.OK).body(userService.updateUser(id, userDTO));
    }

    @PutMapping("/addRole")
    public ResponseEntity<UserDTO> addRoleToUser(@RequestBody AddRoleToUserDTO addRoleToUserDTO) {
        return ResponseEntity.status(HttpStatus.OK).body(userService.addRoleToUser(addRoleToUserDTO));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
