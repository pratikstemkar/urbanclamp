package xyz.urbanclamp.userservice.service;

import xyz.urbanclamp.userservice.dto.AddRoleToUserDTO;
import xyz.urbanclamp.userservice.dto.FullUserDTO;
import xyz.urbanclamp.userservice.dto.UserDTO;
import xyz.urbanclamp.userservice.dto.UserRequestDTO;
import xyz.urbanclamp.userservice.model.User;

import java.util.List;

public interface UserService {
    List<User> getAllUsers();
    User getUserById(Long id);
    UserDTO getUserByEmail(String email);
    FullUserDTO getFullUserByEmail(String email);
    UserDTO createUser(UserRequestDTO userRequestDTO);
    UserDTO updateUser(Long id, UserDTO userDTO);
    UserDTO addRoleToUser(AddRoleToUserDTO addRoleToUserDTO);
    void deleteUser(Long id);
}
