package com.github.mvmcgrath.server.controllers;

import java.util.concurrent.atomic.AtomicLong;

import com.github.mvmcgrath.server.models.Image;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ImageController {
    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();

    @GetMapping("/api/image")
    public Image image(@RequestParam(value = "name", defaultValue = "World")String name) {
        return new Image(counter.incrementAndGet(), String.format(template, name), String.format(template, name));
    }
}
