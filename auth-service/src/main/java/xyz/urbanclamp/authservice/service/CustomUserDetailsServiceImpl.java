package xyz.urbanclamp.authservice.service;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import xyz.urbanclamp.authservice.client.UserClient;
import xyz.urbanclamp.authservice.model.CustomUserDetailsImpl;
import xyz.urbanclamp.basedomains.dto.FullUserDTO;

@Service
public class CustomUserDetailsServiceImpl implements UserDetailsService {
    private final UserClient userClient;

    public CustomUserDetailsServiceImpl(UserClient userClient) {
        this.userClient = userClient;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        FullUserDTO fullUserDTO;
        try {
            fullUserDTO = userClient.getFullUserByEmail(username);
        } catch (Exception e) {
            throw new UsernameNotFoundException(e.getMessage());
        }
        return new CustomUserDetailsImpl(fullUserDTO);
    }
}
