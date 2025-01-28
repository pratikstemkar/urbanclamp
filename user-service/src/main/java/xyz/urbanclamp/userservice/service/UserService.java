package xyz.urbanclamp.userservice.service;

import xyz.urbanclamp.basedomains.dto.user.AddRoleToUserDTO;
import xyz.urbanclamp.basedomains.dto.user.FullUserDTO;
import xyz.urbanclamp.basedomains.dto.user.UserDTO;
import xyz.urbanclamp.basedomains.dto.user.UserRequestDTO;
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
