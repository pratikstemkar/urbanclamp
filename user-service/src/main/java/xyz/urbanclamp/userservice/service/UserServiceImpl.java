package xyz.urbanclamp.userservice.service;

import org.apache.kafka.common.errors.ResourceNotFoundException;
import org.springframework.stereotype.Service;
import xyz.urbanclamp.userservice.model.User;
import xyz.urbanclamp.userservice.repository.UserRepository;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
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
    public User createUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public User updateUser(Long id, User user) {
        User foundUser = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with ID: " + id));
        return userRepository.save(user);
    }

    @Override
    public void deleteUser(Long id) {
        if(!userRepository.existsById(id))
            throw new ResourceNotFoundException("User not found with ID: " + id);
        userRepository.deleteById(id);
    }
}
