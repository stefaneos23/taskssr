package com.example.tasksservices.model;

import com.example.tasksservices.enums.Status;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.time.LocalDate;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "tasks")
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String subject;
    private LocalDate dueDate;
    private Status status;
    @ManyToOne(optional = false)
    //@JoinColumn(name = "assigned_to_username", referencedColumnName = "username")
    private UserEntity assignedTo;

    public Task(String subject, LocalDate dueDate) {
        this.subject = subject;
        this.dueDate = dueDate;
    }
}
