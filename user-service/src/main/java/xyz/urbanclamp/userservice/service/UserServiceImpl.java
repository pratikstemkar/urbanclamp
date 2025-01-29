package xyz.urbanclamp.userservice.service;

import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import xyz.urbanclamp.userservice.dto.AddRoleToUserDTO;
import xyz.urbanclamp.userservice.dto.FullUserDTO;
import xyz.urbanclamp.userservice.dto.UserDTO;
import xyz.urbanclamp.userservice.dto.UserRequestDTO;
import xyz.urbanclamp.userservice.exception.UserNotFoundException;
import xyz.urbanclamp.userservice.model.Role;
import xyz.urbanclamp.userservice.model.User;
import xyz.urbanclamp.userservice.model.UserGender;
import xyz.urbanclamp.userservice.model.UserStatus;
import xyz.urbanclamp.userservice.repository.UserRepository;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    private final RoleService roleService;
    private final ModelMapper modelMapper;

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User getUserById(Long id) {
        return userRepository.findById(id).orElseThrow(() -> new UserNotFoundException("User not found with ID: " + id));
    }

    @Override
    public UserDTO getUserByEmail(String email) {
        User user = userRepository.findUserByEmail(email).orElseThrow(() -> new UserNotFoundException("User not found with Email: " + email));
        return modelMapper.map(user, UserDTO.class);
    }

    @Override
    public FullUserDTO getFullUserByEmail(String email) {
        User user = userRepository.findUserByEmail(email).orElseThrow(() -> new UserNotFoundException("User not found with Email: " + email));
        return modelMapper.map(user, FullUserDTO.class);
    }

    @Override
    public UserDTO createUser(UserRequestDTO userRequestDTO) {
        User user = modelMapper.map(userRequestDTO, User.class);
        user.setGender(UserGender.MALE);
        user.getRoles().add(roleService.findRoleByName("ROLE_USER"));
        user.setStatus(UserStatus.ACTIVE);
        User updatedUser = userRepository.save(user);
        return modelMapper.map(updatedUser, UserDTO.class);
    }

    @Override
    public UserDTO updateUser(Long id, UserDTO userDTO) {
        User user = getUserById(id);
        user.setName(userDTO.getName());
        user.setEmail(userDTO.getEmail());
        user.setPicture(userDTO.getPicture());
        user.setPhoneNumber(userDTO.getPhoneNumber());
        user.setGender(Enum.valueOf(UserGender.class, userDTO.getGender().toUpperCase()));
        User updatedUser = userRepository.save(user);
        return modelMapper.map(updatedUser, UserDTO.class);
    }

    @Override
    public UserDTO addRoleToUser(AddRoleToUserDTO addRoleToUserDTO) {
        User user = getUserById(addRoleToUserDTO.getUserId());
        Role role = roleService.findRoleByName(addRoleToUserDTO.getRoleName());
        user.getRoles().add(role);
        User updatedUser = userRepository.save(user);
        return modelMapper.map(updatedUser, UserDTO.class);
    }

    @Override
    public void deleteUser(Long id) {
        if(!userRepository.existsById(id))
            throw new UserNotFoundException("User not found with ID: " + id);
        userRepository.deleteById(id);
    }
}
