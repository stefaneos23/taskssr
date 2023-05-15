package com.example.tasksservices.service.task;

import com.example.tasksservices.dto.TaskDto;
import com.example.tasksservices.model.Task;

import java.util.List;
import java.util.Optional;


public interface TaskService {

    List<Task> findByTitleContaining(String title);

    List<Task> getAll();

    Optional<Task> getTask(Long id);

    void createTask(TaskDto taskDTO);

    void editTask(TaskDto taskDTO);
}
