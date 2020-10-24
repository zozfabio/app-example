package app.example.api;

import app.example.api.domain.user.UserService;
import app.example.api.security.Profile;
import app.example.api.security.User;
import app.example.api.security.jwt.JwtAuthenticationAccessDecisionVoter;
import app.example.api.security.jwt.JwtAuthenticationEntryPoint;
import app.example.api.security.jwt.JwtAuthenticationFilter;
import app.example.api.security.jwt.JwtAuthenticationProvider;
import app.example.api.security.jwt.JwtSecurityContextRepository;
import java.util.List;
import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.access.AccessDecisionManager;
import org.springframework.security.access.vote.UnanimousBased;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.web.access.expression.WebExpressionVoter;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.savedrequest.NullRequestCache;

import static org.springframework.security.config.http.SessionCreationPolicy.NEVER;

@Configuration
public class WebSecurityConfiguration extends WebSecurityConfigurerAdapter {

    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private JwtAuthenticationProvider authenticationProvider;

    @Autowired
    private AccessDecisionManager accessDecisionManager;

    @Autowired
    private UserService users;

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.eraseCredentials(false)
            .authenticationProvider(authenticationProvider)
            .userDetailsService(userDetailsService);
    }

    @Override
    protected void configure(HttpSecurity security) throws Exception {
        security.cors()
            .and().authorizeRequests()
                .accessDecisionManager(accessDecisionManager)
                .antMatchers("/api/**").hasRole(Profile.DEVELOPER.toString())
            .and().exceptionHandling().authenticationEntryPoint(new JwtAuthenticationEntryPoint())
            .and().securityContext().securityContextRepository(new JwtSecurityContextRepository())
            .and().sessionManagement().sessionCreationPolicy(NEVER)
            .and().requestCache().requestCache(new NullRequestCache())
            .and().headers().frameOptions().sameOrigin()
            .and().csrf().disable()
            .addFilterAt(filter(), UsernamePasswordAuthenticationFilter.class);
    }

    private UsernamePasswordAuthenticationFilter filter() throws Exception {
        var filter = new JwtAuthenticationFilter();
        filter.setAuthenticationManager(authenticationManager());
        return filter;
    }

    @Bean
    public UserDetailsService userDetailsService() {
        return email -> users.findOneByEmail(email)
            .map(u -> User.of(u.getEmail(), u.getName(), u.getPassword(), Set.copyOf(u.getProfiles())))
            .blockOptional()
            .orElseThrow(() -> new UsernameNotFoundException("User not found!"));
    }

    @Bean
    public JwtAuthenticationProvider authenticationProvider(UserDetailsService userDetailsService) {
        return new JwtAuthenticationProvider(userDetailsService);
    }

    @Bean
    public AccessDecisionManager accessDecisionManager() {
        var voters = List.of(
            new WebExpressionVoter(),
            new JwtAuthenticationAccessDecisionVoter()
        );
        var accessDecisionManager = new UnanimousBased(voters);
        accessDecisionManager.setAllowIfAllAbstainDecisions(true);

        return accessDecisionManager;
    }
}
