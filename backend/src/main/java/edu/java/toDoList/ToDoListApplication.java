package edu.java.toDoList;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

/**
 * Application main class.
 */
@SpringBootApplication
@OpenAPIDefinition(info = @Info(
		title = "ToDo List Java API",
		description = "API for managing tasks in a ToDo list",
		version = "1.0.0",
		contact = @io.swagger.v3.oas.annotations.info.Contact(email = "emoliv-code@gmail.com"),
		license = @io.swagger.v3.oas.annotations.info.License(name = "Apache 2.0", url = "https://www.apache.org/licenses/LICENSE-2.0")
))
public class ToDoListApplication {

	public static void main(String[] args) {
		SpringApplication.run(ToDoListApplication.class, args);
	}
}
