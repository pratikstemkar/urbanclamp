package xyz.urbanclamp.userservice.service;

import org.apache.kafka.common.errors.ResourceNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import xyz.urbanclamp.userservice.dto.UserDTO;
import xyz.urbanclamp.userservice.dto.UserRequestDTO;
import xyz.urbanclamp.userservice.model.Role;
import xyz.urbanclamp.userservice.model.User;
import xyz.urbanclamp.userservice.model.UserGender;
import xyz.urbanclamp.userservice.model.UserStatus;
import xyz.urbanclamp.userservice.repository.RoleRepository;
import xyz.urbanclamp.userservice.repository.UserRepository;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Transactional
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final RoleService roleService;

    public UserServiceImpl(UserRepository userRepository, RoleRepository roleRepository, RoleService roleService) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.roleService = roleService;
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }

    @Override
    public UserDTO createUser(UserRequestDTO userRequestDTO) {
        User user = convertToEntity(userRequestDTO);
        user.setGender(UserGender.MALE);
        user.getRoles().add(roleService.findRoleByName("USER"));
        user.setStatus(UserStatus.ACTIVE);
        User createdUser = userRepository.save(user);
        return convertToDTO(createdUser);
    }

    @Override
    public UserDTO updateUser(Long id, UserDTO userDTO) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found with ID: " + id));
        user.setFirstName(userDTO.getFirstName());
        user.setLastName(userDTO.getLastName());
        user.setEmail(userDTO.getEmail());
        user.setPfpUrl(userDTO.getPfpUrl());
        user.setPhoneNumber(userDTO.getPhoneNumber());
        user.setGender(Enum.valueOf(UserGender.class, userDTO.getGender().toUpperCase()));
        User updatedUser = userRepository.save(user);
        return convertToDTO(updatedUser);
    }

    @Override
    public void deleteUser(Long id) {
        if(!userRepository.existsById(id))
            throw new ResourceNotFoundException("User not found with ID: " + id);
        userRepository.deleteById(id);
    }

    private UserDTO convertToDTO(User user) {
        return UserDTO.builder()
                .id(user.getId())
                .firstName(user.getFirstName())
                .lastName(user.getLastName())
                .email(user.getEmail())
                .phoneNumber(user.getPhoneNumber())
                .gender(user.getGender().name())
                .status(user.getStatus().name())
                .pfpUrl(user.getPfpUrl())
                .roles(user.getRoles().stream().map(Role::getName).collect(Collectors.toSet()))
                .build();
    }

    private User convertToEntity(UserRequestDTO userRequestDTO) {
        return User.builder()
                .firstName(userRequestDTO.getFirstName())
                .lastName(userRequestDTO.getLastName())
                .email(userRequestDTO.getEmail())
                .password(userRequestDTO.getPassword())
                .build();
    }
}
