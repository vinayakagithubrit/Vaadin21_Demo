package com.example;

import org.springframework.beans.factory.annotation.Value; // Import for @Value
import org.springframework.stereotype.Component; // Mark this class as a Spring component

@Component // This annotation tells Spring to create and manage an instance of this class
public class GlobalUrlBean {

    // Inject the value of 'app.base.url.context' from application.properties
    @Value("${app.base.url.context}")
    private String appBaseUrlContext;

    // You can inject other properties too
    @Value("${api.key}")
    private String apiKey;

    public String getAppBaseUrlContext() {
        return appBaseUrlContext;
    }

    public String getApiKey() {
        return apiKey;
    }

    // You can add a constructor or post-construction method to see values
    public GlobalUrlBean() {
        // Note: Fields injected with @Value are populated *after* the constructor runs.
        // So, if you print them here, they might be null or default values.
        System.out.println("GlobalUrlBean constructor called.");
    }

    // This method will be called by Spring after the bean is initialized and properties are injected.
    @javax.annotation.PostConstruct // Requires javax.annotation:javax.annotation-api dependency (if using Java 9+)
    public void postConstruct() {
        System.out.println("GlobalUrlBean initialized. appBaseUrlContext: " + appBaseUrlContext);
        System.out.println("GlobalUrlBean initialized. apiKey: " + apiKey);
    }
}