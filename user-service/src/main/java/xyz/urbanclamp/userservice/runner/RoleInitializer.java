package xyz.urbanclamp.userservice.runner;

import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import xyz.urbanclamp.userservice.model.Role;
import xyz.urbanclamp.userservice.repository.RoleRepository;

@Component
@RequiredArgsConstructor
public class RoleInitializer implements CommandLineRunner {
    private final RoleRepository roleRepository;

    @Override
    public void run(String... args) throws Exception {
        if (roleRepository.count() == 0) {
            roleRepository.save(new Role(null, "ROLE_USER", "Standard user role"));
            roleRepository.save(new Role(null, "ROLE_PARTNER", "Partner role for service providers"));
            roleRepository.save(new Role(null, "ROLE_ADMIN", "Administrator role with full privileges"));
        }
    }
}
