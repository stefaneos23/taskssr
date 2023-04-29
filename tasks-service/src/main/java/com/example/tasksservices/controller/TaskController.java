package com.example.tasksservices.controller;

import com.example.tasksservices.dto.MessageResponse;
import com.example.tasksservices.dto.TaskDto;
import com.example.tasksservices.model.Task;
import com.example.tasksservices.repo.TaskRepository;
import com.example.tasksservices.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {

    private final TaskService taskService;

    private final TaskRepository taskRepository;
    @Autowired
    public TaskController(TaskRepository taskRepository, TaskService taskService ) {
        this.taskService = taskService;
        this.taskRepository = taskRepository;
    }
    @GetMapping("/tasks")
    public ResponseEntity<List<Task>> getAllTasks(@RequestParam(required = false) String title) {
        try {

            List<Task> tasks = new ArrayList<Task>();

            if (title == null)
                taskRepository.findAll().forEach(tasks::add);
            else
                taskService.findByTitleContaining(title).forEach(tasks::add);

            if (tasks.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(tasks, HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{taskId")
    public ResponseEntity<Task> getTask(@PathVariable Long taskId){
        Task task = taskService.getTask(taskId).get();
        return ResponseEntity.ok().body(task);
    }

    @PostMapping("/add")
    public ResponseEntity<String> addTask(@RequestBody TaskDto taskDTO) {
        try{
            taskService.createTask(taskDTO);
            return ResponseEntity.ok("Task successfully added!");
        }catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.ok().body("Failed to add the task!");
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

    @DeleteMapping("/tasks")
    public ResponseEntity<HttpStatus> deleteTasks() {
        try{
            taskRepository.deleteAll();
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/tasks/{id}")
    public ResponseEntity<HttpStatus>deleteTask(@PathVariable("id") long id) {
        try{
            taskRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
