package app.example.api;

import app.example.api.domain.user.UserRepository;
import app.example.api.security.jwt.JwtAuthenticationEntryPoint;
import app.example.api.security.jwt.JwtAuthenticationFilter;
import app.example.api.security.jwt.JwtAuthenticationProvider;
import app.example.api.security.jwt.JwtSecurityContextRepository;
import app.example.api.security.User;
import app.example.api.security.Profile;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.savedrequest.NullRequestCache;

import static org.springframework.security.config.http.SessionCreationPolicy.NEVER;

@Configuration
public class WebSecurityConfiguration extends WebSecurityConfigurerAdapter {

    @Autowired
    private JwtAuthenticationProvider authenticationProvider;

    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private UserRepository users;

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.authenticationProvider(authenticationProvider)
            .userDetailsService(userDetailsService);
    }

    @Override
    protected void configure(HttpSecurity security) throws Exception {
        security.cors()
            .and().authorizeRequests()
                .antMatchers("/api/**").hasRole(Profile.DEVELOPER.toString())
            .and().exceptionHandling().authenticationEntryPoint(new JwtAuthenticationEntryPoint())
            .and().securityContext().securityContextRepository(new JwtSecurityContextRepository())
            .and().sessionManagement().sessionCreationPolicy(NEVER)
            .and().requestCache().requestCache(new NullRequestCache())
            .and().headers().frameOptions().deny()
            .and().csrf().disable()
            .addFilterAt(filter(), UsernamePasswordAuthenticationFilter.class);
    }

    private UsernamePasswordAuthenticationFilter filter() throws Exception {
        JwtAuthenticationFilter filter = new JwtAuthenticationFilter();
        filter.setAuthenticationManager(authenticationManager());
        return filter;
    }

    @Bean
    public UserDetailsService userDetailsService() {
        return email -> users.findByEmail(email)
            .map(u -> User.of(u.getId().toString(), u.getEmail(), u.getEmail(), u.getName(), u.getPassword(), u.getProfiles()))
            .orElseThrow(() -> new UsernameNotFoundException("User not found!"));
    }

    @Bean
    public JwtAuthenticationProvider authenticationProvider(UserDetailsService userDetailsService) {
        return new JwtAuthenticationProvider(userDetailsService);
    }
}
