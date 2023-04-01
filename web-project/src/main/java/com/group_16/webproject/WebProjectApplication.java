package com.group_16.webproject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
//import com.group_16.webproject.Entities.User;
import com.group_16.webproject.Repositories.UserRepository;


@SpringBootApplication(exclude = {SecurityAutoConfiguration.class})
@EnableJpaRepositories
@EntityScan
public class WebProjectApplication {

	@Autowired
	UserRepository userRepository;

	public static void main(String[] args) {
		SpringApplication.run(WebProjectApplication.class, args);
	}

}


