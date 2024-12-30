package com.pratikstemkar.urbanclamp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.scheduling.annotation.EnableAsync;

@SpringBootApplication
public class UrbanClampApplication {

	public static void main(String[] args) {
		SpringApplication.run(UrbanClampApplication.class, args);
	}

}
