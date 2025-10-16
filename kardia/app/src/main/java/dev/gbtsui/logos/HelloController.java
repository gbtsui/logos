package dev.gbtsui.logos;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

	@GetMapping("/")
	public String index() {
        System.out.println("hellocontroller called");
		return "Greetings from Spring Boot!\n";
	}

}