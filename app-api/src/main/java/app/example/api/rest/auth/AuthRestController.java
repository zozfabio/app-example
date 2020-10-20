package app.example.api.rest.auth;

import app.example.api.security.jwt.JwtAuthentication;
import app.example.api.security.jwt.JwtTokenPair;
import app.example.api.security.jwt.JwtWebSecurityUtils;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@Slf4j
@RestController
@RequestMapping("/api")
public class AuthRestController {

    @PostMapping(path = "/login", produces = APPLICATION_JSON_VALUE)
    public JwtTokenPair auth() {
        var auth = (JwtAuthentication) SecurityContextHolder.getContext()
            .getAuthentication();
        return JwtTokenPair.of(
            auth.getToken(),
            JwtWebSecurityUtils.generateRefreshToken(auth.getClaims())
        );
    }
}
