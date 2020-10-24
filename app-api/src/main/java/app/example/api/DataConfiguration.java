package app.example.api;

import io.r2dbc.spi.ConnectionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.DefaultResourceLoader;
import org.springframework.core.io.Resource;
import org.springframework.data.r2dbc.connectionfactory.init.ResourceDatabasePopulator;

@Configuration(proxyBeanMethods = false)
public class DataConfiguration {

    @Autowired
    void initializeDatabase(ConnectionFactory connectionFactory) {
        var resourceLoader = new DefaultResourceLoader();
        var scripts = new Resource[] {
            resourceLoader.getResource("classpath:schema.sql"),
            resourceLoader.getResource("classpath:data.sql")
        };
        new ResourceDatabasePopulator(scripts)
            .execute(connectionFactory)
            .block();
    }
}
