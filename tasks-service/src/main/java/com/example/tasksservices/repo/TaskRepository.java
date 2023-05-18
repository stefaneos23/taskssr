package com.example.tasksservices.repo;

import com.example.tasksservices.model.Status;
import com.example.tasksservices.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {
 @Query(value = "SELECT t FROM Task t WHERE " +
         "        (:subject IS NULL OR LOWER(t.subject) LIKE LOWER(CONCAT('%', :subject , '%'))) " +
         "    AND (CAST(:dueDate AS date) IS NULL OR t.dueDate > CAST(:dueDate AS date))" +
         "    AND (:status IS NULL OR t.status =:status)" +
         "   AND  (:assignedTo IS NULL OR t.assignedTo.username=:assignedTo) ORDER BY t.dueDate DESC")
 List<Task> findBySearch(@Param("subject") String subject,
                         @Param("dueDate") LocalDate dueDate,
                         @Param("status")Status status,
                         @Param("assignedTo") String assignedTo);
}
