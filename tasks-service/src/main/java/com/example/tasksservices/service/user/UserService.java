package com.example.tasksservices.service.user;

import com.example.tasksservices.dto.UserDto;
import com.example.tasksservices.model.UserEntity;
import java.util.List;
import java.util.Optional;

public interface UserService {
    List<UserEntity> getUsers();
    Optional<UserEntity> getUserByUsername(String username);
    boolean hasUserWithUsername(String username);
    UserEntity saveUser(UserEntity user);
    void deleteUser(UserEntity user);
    List<UserDto> getUsernames();
}
