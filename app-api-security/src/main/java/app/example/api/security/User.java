package app.example.api.security;

import io.jsonwebtoken.Claims;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;
import lombok.EqualsAndHashCode;
import lombok.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;

import static java.util.stream.Collectors.toList;

@Value
@EqualsAndHashCode(of = {"id"}, callSuper = false)
public class User extends UsernamePasswordAuthenticationToken implements UserDetails, Authentication {

    String id;

    String username;

    String email;

    String fullname;

    String password;

    boolean credentialsExpired;

    Set<Profile> profiles;

    public User(String id, String username, String email, String fullname, String password, boolean credentialsExpired, Set<Profile> profiles) {
        super(username, password, profiles.stream().map(Profile::getRole).collect(toList()));
        this.id = id;
        this.username = username;
        this.email = email;
        this.fullname = fullname;
        this.password = password;
        this.credentialsExpired = credentialsExpired;
        this.profiles = profiles;
    }

    public static User of(String id, String username, String email, String fullname, String password, Set<Profile> profiles) {
        return new User(id, username, email, fullname, password, false, profiles);
    }

    public static User of(Claims claims) {
        var fullname = claims.get("fln", String.class);
        @SuppressWarnings("unchecked")
        var profiles = ((List<String>) claims.get("prf", List.class)).stream()
            .map(Profile::of).collect(Collectors.toSet());

        return new User(claims.getId(), claims.getSubject(), claims.getSubject(), fullname, null, false, profiles);
    }

    public User authenticated(Set<Profile> profiles) {
        return new User(id, username, email, fullname, password, true, profiles);
    }

    public User credentialsExpired() {
        return new User(id, username, email, fullname, password, true, profiles);
    }

    public boolean isEnabled() {
        return true;
    }

    public boolean isAccountNonExpired() {
        return true;
    }

    public boolean isAccountNonLocked() {
        return true;
    }

    public boolean isCredentialsNonExpired() {
        return !credentialsExpired;
    }

    public void setAuthenticated(boolean isAuthenticated) throws IllegalArgumentException {
    }
}
