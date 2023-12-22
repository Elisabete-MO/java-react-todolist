package edu.java.toDoList.services.interfaces;

import edu.java.toDoList.controllers.dto.TaskDto;
import edu.java.toDoList.models.entities.Task;
import java.util.List;

/**
 * Task service interface for {@link Task} entity operations that implements
 * the CRUD methods and the strategy pattern for the multiple implementations
 * of the same.
 */
public interface TaskServiceInterface {
  List<TaskDto> findAll();
  TaskDto findById(Long id);
  void save(Task task);
  void delete(Long id);
  void update(Task task, Long id);
}
