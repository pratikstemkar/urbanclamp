package xyz.urbanclamp.userservice.service;

import xyz.urbanclamp.basedomains.dto.FullUserDTO;
import xyz.urbanclamp.basedomains.dto.UserDTO;
import xyz.urbanclamp.basedomains.dto.UserRequestDTO;
import xyz.urbanclamp.userservice.model.User;

import java.util.List;
import java.util.Optional;

public interface UserService {
    List<User> getAllUsers();
    Optional<User> getUserById(Long id);
    UserDTO getUserByEmail(String email);
    FullUserDTO getFullUserByEmail(String email);
    UserDTO createUser(UserRequestDTO userRequestDTO);
    UserDTO updateUser(Long id, UserDTO userDTO);
    void deleteUser(Long id);
}
