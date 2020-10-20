package app.example.api.security.jwt;

import app.example.api.security.WebSecurityUtils;
import java.io.IOException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.AuthenticationEntryPoint;

public class JwtAuthenticationEntryPoint implements AuthenticationEntryPoint {

    public void commence(
        HttpServletRequest request,
        HttpServletResponse response,
        AuthenticationException ex
    ) throws IOException {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (WebSecurityUtils.isAuthenticated(auth)) {
            response.sendError(HttpServletResponse.SC_FORBIDDEN, ex.getMessage());
        } else {
            response.sendError(HttpServletResponse.SC_UNAUTHORIZED, ex.getMessage());
        }
    }
}
