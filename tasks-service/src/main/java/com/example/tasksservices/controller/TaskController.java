package com.example.tasksservices.controller;

import com.example.tasksservices.dto.MessageResponse;
import com.example.tasksservices.dto.TaskDto;
import com.example.tasksservices.model.Task;
import com.example.tasksservices.repo.TaskRepository;
import com.example.tasksservices.service.task.TaskService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tasks")
public class TaskController {

    private final TaskService taskService;

    private final TaskRepository taskRepository;

    public TaskController(TaskRepository taskRepository, TaskService taskService ) {
        this.taskRepository = taskRepository;
        this.taskService = taskService;

    }
    @GetMapping()
    public ResponseEntity<List<Task>> getAllTasks() {
        List<Task> tasks = taskService.getAll();
        return new ResponseEntity<>(tasks, HttpStatus.OK);
}

    @GetMapping("/{taskId}")
    public ResponseEntity<Task> getTask(@PathVariable Long taskId){
        Task task = taskService.getTask(taskId).get();
        return ResponseEntity.ok().body(task);
    }

    @PostMapping("/add")
    public ResponseEntity<?> addTask(@RequestBody TaskDto taskDTO) {
        try{
            taskService.createTask(taskDTO);
            return ResponseEntity.ok().body(new MessageResponse("Task successfully added!"));
        }catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.ok().body(new MessageResponse("Failed to add the task!"));
        }
    }

    @PutMapping("/edit")
    public ResponseEntity<?> editTask(@RequestBody TaskDto taskDTO) {
        try{
        taskService.editTask(taskDTO);
        return ResponseEntity.ok().body(new MessageResponse("Task edited successfully!"));
    }catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.ok().body(new MessageResponse("Failed to edit the task!"));
        }
    }

    @DeleteMapping("/delete-tasks")
    public ResponseEntity<HttpStatus> deleteTasks() {
        try{
            taskRepository.deleteAll();
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/delete-tasks/{id}")
    public ResponseEntity<HttpStatus>deleteTask(@PathVariable("id") long id) {
        try{
            taskRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
