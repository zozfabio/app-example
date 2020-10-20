package app.example.api.security;

import java.util.Collection;
import java.util.Set;
import lombok.Value;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import static java.util.stream.Collectors.toUnmodifiableList;

@Value(staticConstructor = "of")
public class User implements UserDetails {

    String email;

    String fullname;

    String password;

    Set<Profile> profiles;

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return profiles.stream()
            .map(Profile::getRole)
            .collect(toUnmodifiableList());
    }
}
