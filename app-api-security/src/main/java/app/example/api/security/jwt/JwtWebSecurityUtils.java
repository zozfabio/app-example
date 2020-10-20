package app.example.api.security.jwt;

import app.example.api.security.Profile;
import app.example.api.security.User;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.SignatureException;
import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import javax.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;

import static java.util.Objects.nonNull;
import static java.util.stream.Collectors.toSet;

@Slf4j
public abstract class JwtWebSecurityUtils {

    private static final String TOKEN_SIGNING_KEY = "7KmLiqvUXo9pR74AJSZxKAoFLt10BCew";

    public static Claims generateAccessToken(User user) {
        var issuedAt = LocalDateTime.now();

        var custom = Map.of(
            "grt", JwtGrantType.ACCESS.getShortName(),
            "fln", user.getFullname(),
            "prf", user.getProfiles(),
            Claims.SUBJECT, user.getEmail(),
            Claims.ISSUED_AT, issuedAt.atZone(ZoneOffset.systemDefault()).toInstant().toEpochMilli() / 1000,
            Claims.EXPIRATION, issuedAt.plusMinutes(2).atZone(ZoneOffset.systemDefault()).toInstant().toEpochMilli() / 1000
        );

        return Jwts.claims(custom);
    }

    public static String generateAccessToken(Claims claims) {
        return Jwts.builder()
            .setClaims(claims)
            .signWith(SignatureAlgorithm.HS512, TOKEN_SIGNING_KEY)
            .compact();
    }

    public static String generateRefreshToken(Claims accessToken) {
        var issuedAt = LocalDateTime.ofInstant(accessToken.getIssuedAt().toInstant(), ZoneOffset.systemDefault());
        var expiration = LocalDateTime.ofInstant(accessToken.getExpiration().toInstant(), ZoneOffset.systemDefault());

        return Jwts.builder()
            .setIssuedAt(Date.from(issuedAt.atZone(ZoneOffset.systemDefault()).toInstant()))
            .setNotBefore(Date.from(expiration.atZone(ZoneOffset.systemDefault()).toInstant()))
            .setExpiration(Date.from(expiration.plusMinutes(2).atZone(ZoneOffset.systemDefault()).toInstant()))
            .claim("grt", JwtGrantType.REFRESH.getShortName())
            .signWith(SignatureAlgorithm.HS512, TOKEN_SIGNING_KEY)
            .compact();
    }

    public static Optional<String> getToken(HttpServletRequest request) {
        var authorization = request.getHeader("Authorization");
        if (nonNull(authorization)) {
            return Optional.of(authorization.replaceFirst("Bearer ", ""));
        }
        return Optional.empty();
    }

    @SuppressWarnings("unchecked")
    public static JwtAuthentication authenticate(String accessToken) {
        try {
            var body = Jwts.parser()
                .setSigningKey(TOKEN_SIGNING_KEY)
                .parseClaimsJws(accessToken)
                .getBody();

            var subject = body.getSubject();
            var grantType = JwtGrantType.of(body.get("grt", String.class));
            var profiles = ((List<String>) body.get("prf", List.class)).stream()
                .map(Profile::of)
                .collect(toSet());

            return JwtAuthentication.of(subject, grantType, profiles, accessToken, body);
        } catch (SignatureException ex) {
            log.debug("Invalid Token Signature!", ex);

            return JwtAuthentication.invalidSignature(accessToken);
        } catch (ExpiredJwtException ex) {
            log.debug("Token Expired!", ex);

            var claims = ex.getClaims();

            var subject = claims.getSubject();
            var grantType = JwtGrantType.of(claims.get("grt", String.class));
            var profiles = ((List<String>) claims.get("prf", List.class)).stream()
                .map(Profile::of)
                .collect(toSet());

            return JwtAuthentication.expired(subject, grantType, profiles, accessToken, claims);
        }
    }
}
