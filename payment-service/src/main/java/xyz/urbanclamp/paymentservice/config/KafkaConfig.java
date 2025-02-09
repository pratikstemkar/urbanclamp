package xyz.urbanclamp.paymentservice.config;

import org.apache.kafka.clients.admin.NewTopic;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.config.TopicBuilder;

@Configuration
public class KafkaConfig {
    @Value("${spring.kafka.topic.name}")
    private String paymentSuccess;

    @Bean
    public NewTopic paymentSuccessTopic() {
        System.out.println("in topic config");
        return TopicBuilder.name(paymentSuccess)
                .build();
    }

    @Bean
    public NewTopic paymentFailedTopic() {
        System.out.println("in topic config");
        return TopicBuilder.name("payment.failed")
                .build();
    }
}
