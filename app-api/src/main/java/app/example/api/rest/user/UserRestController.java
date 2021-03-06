package app.example.api.rest.user;

import app.example.api.domain.user.User;
import app.example.api.domain.user.UserService;
import app.example.api.security.jwt.JwtAuthentication;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
public class UserRestController {

    private final UserService users;

    @GetMapping(produces = APPLICATION_JSON_VALUE)
    public Mono<User> getUser() {
        var auth = (JwtAuthentication) SecurityContextHolder.getContext()
            .getAuthentication();
        return users.findOneByEmail(auth.getSubject());
    }
}
