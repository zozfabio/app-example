package app.example.api.domain.user;

import app.example.api.security.Profile;
import java.util.List;
import java.util.Set;
import java.util.UUID;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;
import lombok.With;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.PersistenceConstructor;
import org.springframework.data.annotation.Transient;
import org.springframework.data.relational.core.mapping.Table;

@Table("users")
@AllArgsConstructor(staticName = "of")
@Getter
@EqualsAndHashCode(of = {"id"})
@ToString
public class User {

    @Id
    @With
    private final UUID id;

    private String email, name, password;

    @Transient
    @With
    private Set<Profile> profiles;

    @PersistenceConstructor
    public User(UUID id, String email, String name, String password) {
        this.id = id;
        this.email = email;
        this.name = name;
        this.password = password;
        this.profiles = Set.of();
    }

    public List<Profile> getProfiles() {
        return List.copyOf(profiles);
    }
}
