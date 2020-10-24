package app.example.api.domain.user;

import app.example.api.security.Profile;
import java.util.UUID;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;
import lombok.With;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

@Table("user_profiles")
@AllArgsConstructor(staticName = "of")
@Getter
@EqualsAndHashCode(of = {"userId", "profile"})
@ToString
public class UserProfile {

    @Id
    @With
    private final UUID id;

    private final UUID userId;

    private final Profile profile;
}
