package com.example.tasksservices.service;

import com.example.tasksservices.dto.TaskDto;
import com.example.tasksservices.model.Task;
import com.example.tasksservices.repo.TaskRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class TaskServiceImpl implements TaskService{

    private final TaskRepository taskRepository;

    public TaskServiceImpl(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    @Override
    public List<Task> findByTitleContaining(String title) {
        return null;
    }

    @Override
    public Optional<Task> getTask(Long id) {
        return taskRepository.findById(id);
    }

    @Override
    public void createTask(TaskDto taskDTO) {
        Task task = new Task(taskDTO.getSubject(), taskDTO.getDueDate());
        task.setSubject(taskDTO.getSubject());
        task.setDueDate(taskDTO.getDueDate());
        taskRepository.save(task);
    }

    @Override
    public void editTask(TaskDto taskDTO) {
        Task task = taskRepository.findById(taskDTO.getId()).get();
        task.setSubject(taskDTO.getSubject());
        task.setDueDate(taskDTO.getDueDate());
        task.setStatus(taskDTO.getStatus());
    }
}
