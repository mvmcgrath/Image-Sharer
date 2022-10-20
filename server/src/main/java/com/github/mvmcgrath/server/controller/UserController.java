package com.github.mvmcgrath.server.controller;

import com.github.mvmcgrath.server.exception.ResourceNotFoundException;
import com.github.mvmcgrath.server.model.User;
import com.github.mvmcgrath.server.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @GetMapping("/users")
    public List<User> getAllUsers() {
        List<User> users = userRepository.findAll();
        for (User user : users) {
            user.setPasswordHash("");
        }
        return users;
    }

    @PostMapping("/users")
    public User createUser(@RequestBody User user) {
        return userRepository.save(user);
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("An user does not exist with id: " + id));
        user.setPasswordHash("");
        return ResponseEntity.ok(user);
    }
}
