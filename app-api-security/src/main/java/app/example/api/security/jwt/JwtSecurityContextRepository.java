package app.example.api.security.jwt;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.context.HttpRequestResponseHolder;
import org.springframework.security.web.context.SecurityContextRepository;

public class JwtSecurityContextRepository implements SecurityContextRepository {

    public boolean containsContext(HttpServletRequest request) {
        return JwtWebSecurityUtils.getToken(request)
            .isPresent();
    }

    public SecurityContext loadContext(HttpRequestResponseHolder holder) {
        SecurityContext securityContext = SecurityContextHolder.createEmptyContext();

        JwtWebSecurityUtils.getToken(holder.getRequest())
            .flatMap(JwtWebSecurityUtils::parseToken)
            .ifPresent(securityContext::setAuthentication);

        return securityContext;
    }

    public void saveContext(SecurityContext context, HttpServletRequest request, HttpServletResponse response) {
    }
}
