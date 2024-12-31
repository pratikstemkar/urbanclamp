package com.pratikstemkar.urbanclamp.service;

import com.pratikstemkar.urbanclamp.dto.UserDTO;
import com.pratikstemkar.urbanclamp.dto.UserRequestDTO;
import com.pratikstemkar.urbanclamp.model.User;
import com.pratikstemkar.urbanclamp.model.UserGender;
import com.pratikstemkar.urbanclamp.model.UserRole;
import com.pratikstemkar.urbanclamp.model.UserStatus;
import com.pratikstemkar.urbanclamp.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<UserDTO> getAllUsers() {
        List<User> users = userRepository.findAll();
        return users.stream().map(this::convertToDTO).collect(Collectors.toList());
    }

    public UserDTO getUserById(Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found with ID: " + id));
        return convertToDTO(user);
    }

    public UserDTO getUserByEmail(String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found with Email: " + email));
        return convertToDTO(user);
    }

    public UserDTO createUser(UserRequestDTO userRequestDTO) {
        User user = convertToEntity(userRequestDTO);
        user.setGender(UserGender.MALE);
        user.setRole(UserRole.USER);
        user.setStatus(UserStatus.ACTIVE);
        User createdUser = userRepository.save(user);
        return convertToDTO(createdUser);
    }

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

    public void deleteUser(Long id) {
        if(!userRepository.existsById(id)) {
            throw new RuntimeException("User not found with ID: " + id);
        }
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
                .role(user.getRole().name())
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
