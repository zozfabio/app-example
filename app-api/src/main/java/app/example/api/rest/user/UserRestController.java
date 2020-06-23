package app.example.api.rest.user;

import app.example.api.security.User;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
public class UserRestController {

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public User getUser(User user) {
        return user;
    }
}
