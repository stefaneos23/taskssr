package com.example.tasksservices.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "userregister")
public class User {

    private String name;
    @Id
    private String userId;
    private String email;
    private String phone;
    private String password;
    private String cpassword;
    private String gender;

}
