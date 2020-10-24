package app.example.api.domain.user;

import java.util.Set;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import reactor.core.publisher.Mono;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class UserService {

    private final UserRepository users;

    private final UserProfileRepository profiles;

    public Mono<User> findOneByEmail(String email) {
        return users.findByEmail(email)
            .flatMap(u -> profiles.findAllByUserId(u.getId())
                .map(UserProfile::getProfile)
                .collectList()
                .map(ps -> u.withProfiles(Set.copyOf(ps))));
    }
}
