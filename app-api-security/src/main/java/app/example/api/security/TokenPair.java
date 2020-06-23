package app.example.api.security;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import static lombok.AccessLevel.PROTECTED;

@NoArgsConstructor(access = PROTECTED)
@AllArgsConstructor(staticName = "of")
@Getter
@EqualsAndHashCode
@ToString
public class TokenPair {

    private String accessToken;

    private String refreshToken;
}
