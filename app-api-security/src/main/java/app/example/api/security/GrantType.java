package app.example.api.security;

import java.util.Arrays;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Getter
public enum GrantType {

    ACCESS("AC"), REFRESH("RF"), NULL("NL");

    private final String shortName;

    public static GrantType of(String shortName) {
        return Arrays.stream(values())
            .filter(p -> shortName.equalsIgnoreCase(p.shortName))
            .findFirst().orElse(NULL);
    }
}
