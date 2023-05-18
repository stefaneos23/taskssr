package com.example.tasksservices.controller;

import com.example.tasksservices.dto.responses.UserDto;
import com.example.tasksservices.model.Task;
import com.example.tasksservices.model.UserEntity;
import com.example.tasksservices.service.user.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/user")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/tasks/{username}")
    public ResponseEntity<Set<Task>> getAssignedTasks(@PathVariable String username) {
        Set<Task> tasks = userService.getUserByUsername(username).get().getAssignedTasks();
        return ResponseEntity.ok().body(tasks);
    }

    @DeleteMapping("/delete/{username}")
    public ResponseEntity<String> deleteUser(@PathVariable String username) {
        UserEntity user = userService.getUserByUsername(username).get();
        try {
            userService.deleteUser(user);
            return ResponseEntity.ok().body("User deleted");
        }catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.ok().body("Couldn't delete user");
        }
    }

    @GetMapping("/list-all")
    public ResponseEntity<List<UserDto>> getListOfUsernames() {
        return ResponseEntity.ok().body(userService.getUsernames());
    }
}
