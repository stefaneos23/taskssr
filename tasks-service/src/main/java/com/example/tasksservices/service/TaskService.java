package com.example.tasksservices.service;

import com.example.tasksservices.dto.TaskDto;
import com.example.tasksservices.model.Task;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface TaskService {

    List<Task> findByTitleContaining(String title);

    Optional<Task> getTask(Long id);

    void createTask(TaskDto taskDTO);

    void editTask(TaskDto taskDTO);
}
