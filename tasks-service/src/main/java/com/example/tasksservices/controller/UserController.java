package com.example.tasksservices.controller;

import com.example.tasksservices.model.User;
import com.example.tasksservices.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired
    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostMapping("/user")
    public ResponseEntity<User> registerUser(@RequestBody User user) {
        System.out.println("Controller called");
        return ResponseEntity.ok(userRepository.save(user));
    }
}
