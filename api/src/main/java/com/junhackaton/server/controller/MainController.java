package com.junhackaton.server.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController {

    @GetMapping("/view")
    public String getHelloWorld() {

        return "Hello, world! It's string to see app is working";
    }

}