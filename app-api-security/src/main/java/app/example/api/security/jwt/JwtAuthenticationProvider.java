package app.example.api.security.jwt;

import app.example.api.security.User;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;

@Slf4j
public class JwtAuthenticationProvider extends DaoAuthenticationProvider {

    public JwtAuthenticationProvider(UserDetailsService userDetailsService) {
        setUserDetailsService(userDetailsService);
    }

    public JwtAuthenticationProvider(UserDetailsService userDetailsService, PasswordEncoder passwordEncoder) {
        setUserDetailsService(userDetailsService);
        setPasswordEncoder(passwordEncoder);
    }

    protected Authentication createSuccessAuthentication(
        Object principal,
        Authentication authentication,
        UserDetails userDetails
    ) {
        if (userDetails instanceof User) {
            var user = (User) userDetails;
            var claims = JwtWebSecurityUtils.generateAccessToken(user);
            var accessToken = JwtWebSecurityUtils.generateAccessToken(claims);

            return JwtAuthentication.of(
                claims.getSubject(),
                JwtGrantType.ACCESS,
                user.getProfiles(),
                accessToken,
                claims
            );
        }

        log.warn("UserDetails is not a valid user for jwt authentication!");

        return null;
    }
}
