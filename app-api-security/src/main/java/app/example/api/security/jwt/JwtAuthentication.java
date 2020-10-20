package app.example.api.security.jwt;

import app.example.api.security.Profile;
import io.jsonwebtoken.Claims;
import java.util.Collection;
import java.util.List;
import lombok.Getter;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

import static java.util.stream.Collectors.toList;

@Getter
public class JwtAuthentication extends UsernamePasswordAuthenticationToken {

    private final String subject;

    private final JwtGrantType grantType;

    private String token;

    private final Claims claims;

    private final boolean invalidSignature;

    private final boolean expired;

    private JwtAuthentication(
        String subject, JwtGrantType grantType, Collection<Profile> profiles,
        String token, Claims claims,
        boolean invalidSignature, boolean expired
    ) {
        super(subject, token, profiles.stream()
            .map(Profile::getRole)
            .collect(toList()));

        this.subject = subject;
        this.grantType = grantType;
        this.token = token;
        this.claims = claims;
        this.invalidSignature = invalidSignature;
        this.expired = expired;

        super.setDetails(claims);
    }

    public static JwtAuthentication of(
        String subject, JwtGrantType grantType, Collection<Profile> profiles,
        String token, Claims claims
    ) {
        return new JwtAuthentication(subject, grantType, profiles, token, claims, false, false);
    }

    public static JwtAuthentication invalidSignature(String token) {
        return new JwtAuthentication("", JwtGrantType.NULL, List.of(), token, null, true, false);
    }

    public static JwtAuthentication expired(
        String subject, JwtGrantType grantType, Collection<Profile> profiles,
        String token, Claims claims
    ) {
        return new JwtAuthentication(subject, grantType, profiles, token, claims, false, true);
    }

    @Override
    public void eraseCredentials() {
        super.eraseCredentials();
        this.token = null;
    }
}
