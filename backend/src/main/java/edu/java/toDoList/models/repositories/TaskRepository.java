package edu.java.toDoList.models.repositories;

import edu.java.toDoList.models.entities.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Repository for {@link Task} entity.
 */
@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {
}
