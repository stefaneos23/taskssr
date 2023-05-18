package com.example.tasksservices.dto.requests;

import com.example.tasksservices.model.Status;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
public class SearchReq {
    private String subject;
    private LocalDate dueDate;
    private Status status;
    private String assignedTo;

}
