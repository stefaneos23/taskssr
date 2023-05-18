package com.example.tasksservices.service.task;

import com.example.tasksservices.dto.requests.SearchReq;
import com.example.tasksservices.dto.requests.TaskDto;
import com.example.tasksservices.model.Task;
import com.example.tasksservices.model.UserEntity;
import com.example.tasksservices.repo.TaskRepository;
import com.example.tasksservices.repo.UserRepository;
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
        user.getAssignedTasks().add(task);
        userRepository.save(user);
    }

    @Override
    public void editTask(TaskDto taskDTO) {
        Task task = taskRepository.findById(taskDTO.getId()).get();
        task.setSubject(taskDTO.getSubject());
        task.setDueDate(taskDTO.getDueDate());
        task.setStatus(taskDTO.getStatus());
        taskRepository.save(task);
    }

    @Override
    public List<Task> search(SearchReq searchReq) {
        return taskRepository.findBySearch(
                searchReq.getSubject(),
                searchReq.getDueDate(),
                searchReq.getStatus(),
                searchReq.getAssignedTo()
        );
    }


}
