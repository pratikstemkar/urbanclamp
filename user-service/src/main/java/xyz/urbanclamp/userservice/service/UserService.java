package xyz.urbanclamp.userservice.service;

import xyz.urbanclamp.userservice.dto.UserDTO;
import xyz.urbanclamp.userservice.dto.UserRequestDTO;
import xyz.urbanclamp.userservice.model.User;

import java.util.List;
import java.util.Optional;

public interface UserService {
    List<User> getAllUsers();
    Optional<User> getUserById(Long id);
    UserDTO createUser(UserRequestDTO userRequestDTO);
    UserDTO updateUser(Long id, UserDTO userDTO);
    void deleteUser(Long id);
}
