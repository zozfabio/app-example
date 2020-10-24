package app.example.api.domain.user;

import java.util.UUID;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import reactor.core.publisher.Flux;

public interface UserProfileRepository extends ReactiveCrudRepository<UserProfile, UUID> {

    Flux<UserProfile> findAllByUserId(UUID userId);
}
