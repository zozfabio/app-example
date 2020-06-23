package app.example.api.security.jwt;

import app.example.api.security.TokenPair;
import app.example.api.security.User;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.SignatureException;
import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.util.Date;
import java.util.Optional;
import javax.servlet.http.HttpServletRequest;

import static java.util.Objects.nonNull;

public interface JwtWebSecurityUtils {

    String TOKEN_SIGNING_KEY = "7KmLiqvUXo9pR74AJSZxKAoFLt10BCew";

    static Optional<String> getToken(HttpServletRequest request) {
        var authorization = request.getHeader("Authorization");
        if (nonNull(authorization)) {
            return Optional.of(authorization.replaceFirst("Bearer ", ""));
        }
        return Optional.empty();
    }

    static TokenPair generateToken(User user) {
        var now = LocalDateTime.now();

        var accessToken = Jwts.builder()
            .setSubject(user.getEmail())
            .setIssuedAt(Date.from(now.atZone(ZoneOffset.systemDefault()).toInstant()))
            .setExpiration(Date.from(now.plusMinutes(2).atZone(ZoneOffset.systemDefault()).toInstant()))
            .claim("grt", "ac")
            .claim("fln", user.getFullname())
            .claim("prf", user.getProfiles())
            .signWith(SignatureAlgorithm.HS512, TOKEN_SIGNING_KEY)
            .compact();

        var refreshToken = Jwts.builder()
            .setIssuedAt(Date.from(now.atZone(ZoneOffset.systemDefault()).toInstant()))
            .setNotBefore(Date.from(now.plusMinutes(1).atZone(ZoneOffset.systemDefault()).toInstant()))
            .setExpiration(Date.from(now.plusMinutes(3).atZone(ZoneOffset.systemDefault()).toInstant()))
            .claim("grt", "rf")
            .signWith(SignatureAlgorithm.HS512, TOKEN_SIGNING_KEY)
            .compact();

        return TokenPair.of(accessToken, refreshToken);
    }

    static Optional<User> parseToken(String accessToken) {
        try {
            var body = Jwts.parser()
                .setSigningKey(TOKEN_SIGNING_KEY)
                .parseClaimsJws(accessToken)
                .getBody();

            return Optional.of(User.of(body));
        } catch (ExpiredJwtException ex) {
            var body = ex.getClaims();

            return Optional.of(User.of(body)
                .credentialsExpired());
        } catch (SignatureException ex) {
            return Optional.empty();
        }
    }
}
