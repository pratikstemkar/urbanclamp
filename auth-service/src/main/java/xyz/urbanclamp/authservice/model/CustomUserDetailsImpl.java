package xyz.urbanclamp.authservice.model;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import xyz.urbanclamp.basedomains.dto.FullUserDTO;

import java.util.Collection;

public class CustomUserDetailsImpl implements UserDetails {
    private FullUserDTO fullUserDTO;

    public CustomUserDetailsImpl(FullUserDTO fullUserDTO) {
        super();
        this.fullUserDTO = fullUserDTO;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return fullUserDTO.getRoles().stream().map(SimpleGrantedAuthority::new).toList();
    }

    @Override
    public String getPassword() {
        return fullUserDTO.getPassword();
    }

    @Override
    public String getUsername() {
        return fullUserDTO.getEmail();
    }

    public FullUserDTO getFullUserDTO() {
        return fullUserDTO;
    }
}
