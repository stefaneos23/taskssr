package com.example.tasksservices.dto;

import com.example.tasksservices.enums.Status;
import lombok.Data;

import java.time.LocalDate;

@Data
public class TaskDto {
    private Long id;
    private String subject;
    private LocalDate dueDate;
    private String assignedTo;
    private Status status;

    public TaskDto(String subject, LocalDate dueDate, String assignedTo) {
        this.subject = subject;
        this.dueDate = dueDate;
        this.assignedTo = assignedTo;
    }
}
