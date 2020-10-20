package app.example.api.security.jwt;

import java.util.Collection;
import org.springframework.security.access.AccessDecisionVoter;
import org.springframework.security.access.ConfigAttribute;
import org.springframework.security.core.Authentication;

public class JwtAuthenticationAccessDecisionVoter implements AccessDecisionVoter<Object> {

    @Override
    public boolean supports(ConfigAttribute attribute) {
        return true;
    }

    @Override
    public boolean supports(Class<?> clazz) {
        return true;
    }

    @Override
    public int vote(
        Authentication auth,
        Object object,
        Collection<ConfigAttribute> attributes
    ) {
        if (auth instanceof JwtAuthentication) {
            var jwtAuth = (JwtAuthentication) auth;
            if (jwtAuth.isExpired()) {
                return ACCESS_DENIED;
            }
            if (jwtAuth.isInvalidSignature()) {
                return ACCESS_DENIED;
            }
            return ACCESS_GRANTED;
        }
        return ACCESS_ABSTAIN;
    }
}
