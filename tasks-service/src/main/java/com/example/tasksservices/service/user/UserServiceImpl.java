package com.example.tasksservices.service.user;

import com.example.tasksservices.dto.UserDto;
import com.example.tasksservices.model.UserEntity;
import com.example.tasksservices.repo.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService{

    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public List<UserEntity> getUsers() {
        return userRepository.findAll();
    }

    @Override
    public Optional<UserEntity> getUserByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    @Override
    public boolean hasUserWithUsername(String username) {
        return userRepository.existsByUsername(username);
    }

    @Override
    public UserEntity saveUser(UserEntity user) {
        return userRepository.save(user);
    }

    @Override
    public void deleteUser(UserEntity user) {
        userRepository.delete(user);
    }

    @Override
    public List<UserDto> getUsernames() {
        List<UserEntity> users = getUsers();
        return users.stream().map(user -> new UserDto(user.getUsername())).collect(Collectors.toList());
    }
}
