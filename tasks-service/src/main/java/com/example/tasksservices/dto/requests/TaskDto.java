package com.example.tasksservices.dto.requests;

import com.example.tasksservices.model.Status;
import lombok.Data;

import java.time.LocalDate;

@Data
public class TaskDto {
    private Long id;
    private String subject;
    private LocalDate dueDate;
    private Status status;
    private String assignedTo;

    public TaskDto(String subject, LocalDate dueDate, Status status, String assignedTo) {
        this.subject = subject;
        this.dueDate = dueDate;
        this.status = status;
        this.assignedTo = assignedTo;
    }
}
