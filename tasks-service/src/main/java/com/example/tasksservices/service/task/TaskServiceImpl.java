package com.example.tasksservices.service.task;

import com.example.tasksservices.dto.TaskDto;
import com.example.tasksservices.model.Task;
import com.example.tasksservices.model.UserEntity;
import com.example.tasksservices.repo.TaskRepository;
import com.example.tasksservices.repo.UserRepository;
import com.example.tasksservices.service.task.TaskService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class TaskServiceImpl implements TaskService {

    private final UserRepository userRepository;
    private final TaskRepository taskRepository;

    public TaskServiceImpl(UserRepository userRepository, TaskRepository taskRepository) {
        this.userRepository = userRepository;
        this.taskRepository = taskRepository;
    }

    @Override
    public List<Task> findByTitleContaining(String title) {
        return null;
    }

    @Override
    public List<Task> getAll() {
        return taskRepository.findAll();
    }

    @Override
    public Optional<Task> getTask(Long id) {
        return taskRepository.findById(id);
    }


    @Override
    public void createTask(TaskDto taskDTO) {
        UserEntity user = userRepository.findByUsername(taskDTO.getAssignedTo()).get();
        Task task = new Task();
        task.setSubject(taskDTO.getSubject());
        task.setDueDate(taskDTO.getDueDate());
        task.setStatus(taskDTO.getStatus());
        task.setAssignedTo(user);
        taskRepository.save(task);
        user.getTasks().add(task);
        userRepository.save(user);
    }

    @Override
    public void editTask(TaskDto taskDTO) {
        Task task = taskRepository.findById(taskDTO.getId()).get();
        task.setSubject(taskDTO.getSubject());
        task.setDueDate(taskDTO.getDueDate());
        task.setStatus(taskDTO.getStatus());
    }
}
