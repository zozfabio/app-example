package app.example.api.rest.auth;

import app.example.api.security.jwt.JwtWebSecurityUtils;
import app.example.api.security.TokenPair;
import app.example.api.security.User;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class AuthRestController {

    @PostMapping(path = "/login", produces = MediaType.APPLICATION_JSON_VALUE)
    public TokenPair auth(User user) {
        return JwtWebSecurityUtils.generateToken(user);
    }
}
