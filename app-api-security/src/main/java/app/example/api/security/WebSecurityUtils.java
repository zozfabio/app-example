package app.example.api.security;

import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;

import static java.util.Objects.nonNull;

public interface WebSecurityUtils {

    static boolean isAuthenticated(Authentication auth) {
        return nonNull(auth) && !(auth instanceof AnonymousAuthenticationToken);
    }
}
