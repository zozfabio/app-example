package app.example.api.security.jwt;

import java.util.Arrays;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Getter
public enum JwtGrantType {

    ACCESS("AC"), REFRESH("RF"), NULL("NL");

    private final String shortName;

    public static JwtGrantType of(String shortName) {
        return Arrays.stream(values())
            .filter(p -> shortName.equalsIgnoreCase(p.shortName))
            .findFirst().orElse(NULL);
    }
}
