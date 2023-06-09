package com.example.tasksservices.controller;

import com.example.tasksservices.dto.requests.LoginDto;
import com.example.tasksservices.dto.requests.RegisterDto;
import com.example.tasksservices.dto.responses.LoginResponseDTO;
import com.example.tasksservices.dto.responses.MessageResponse;
import com.example.tasksservices.model.Role;
import com.example.tasksservices.model.UserEntity;
import com.example.tasksservices.repo.RoleRepository;
import com.example.tasksservices.repo.UserRepository;
import com.example.tasksservices.security.JWTGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;
    private final JWTGenerator jwtGenerator;

    @Autowired
    public AuthController(AuthenticationManager authenticationManager, UserRepository userRepository, RoleRepository roleRepository, PasswordEncoder passwordEncoder, JWTGenerator jwtGenerator) {
        this.authenticationManager = authenticationManager;
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtGenerator = jwtGenerator;
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterDto registerDto){
        if (userRepository.existsByUsername(registerDto.getUsername())){
            return new ResponseEntity<>("Username is taken!", HttpStatus.BAD_REQUEST);
        }

        UserEntity user = new UserEntity();
        user.setUsername(registerDto.getUsername());
        user.setPassword(passwordEncoder.encode(registerDto.getPassword()));

        Role roles = roleRepository.findByName("USER").orElseThrow();
        user.setRoles(Collections.singletonList(roles));

        userRepository.save(user);
        return ResponseEntity.ok().body(new MessageResponse("merge"));
    }

    @PostMapping("/login")
    public LoginResponseDTO login(@RequestBody LoginDto loginDto) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginDto.getUsername(),
                        loginDto.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        System.out.println(loginDto.getUsername());
        //UserEntity user = (UserEntity) authentication.getPrincipal();
        String token = jwtGenerator.generateToken(authentication);
        LoginResponseDTO loginResponse = new LoginResponseDTO();
        loginResponse.setToken(token);
        //loginResponse.setUserId(user.getId());

        return loginResponse;
    }
}
