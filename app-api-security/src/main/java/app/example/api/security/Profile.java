package app.example.api.security;

import java.util.Arrays;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

@RequiredArgsConstructor
@Getter
public enum Profile {

    DEVELOPER(new SimpleGrantedAuthority("ROLE_DEVELOPER")), NULL(new SimpleGrantedAuthority("ROLE_NULL"));

    private final GrantedAuthority role;

    public static Profile of(String profile) {
        return Arrays.stream(values())
            .filter(p -> profile.equalsIgnoreCase(p.toString()))
            .findFirst().orElse(NULL);
    }

    public static Profile of(GrantedAuthority role) {
        return Arrays.stream(values())
            .filter(p -> role.equals(p.getRole()))
            .findFirst().orElse(NULL);
    }
}
