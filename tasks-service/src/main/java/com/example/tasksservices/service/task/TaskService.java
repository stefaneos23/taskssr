package com.example.tasksservices.service.task;

import com.example.tasksservices.dto.requests.SearchReq;
import com.example.tasksservices.dto.requests.TaskDto;
import com.example.tasksservices.model.Task;

import java.util.List;
import java.util.Optional;


public interface TaskService {

    List<Task> getAll();

    Optional<Task> getTask(Long id);

    void createTask(TaskDto taskDTO);

    void editTask(TaskDto taskDTO);

    List<Task> search(SearchReq searchReq);

}
