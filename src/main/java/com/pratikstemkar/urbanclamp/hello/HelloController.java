package com.pratikstemkar.urbanclamp.hello;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/v1")
public class HelloController {

    @GetMapping("/hello")
    public String helloWorld() {
        return "Hello World!";
    }
}
