package edu.java.toDoList.services.interfaces;

import edu.java.toDoList.controllers.dto.TaskDto;
import edu.java.toDoList.models.entities.Task;
import java.util.List;
import java.util.Optional;

/**
 * Task service interface for {@link Task} entity operations that implements
 * the CRUD methods and the strategy pattern for the multiple implementations
 * of the same.
 */
public interface TaskServiceInterface {
  List<TaskDto> findAll();
  Optional<TaskDto> findById(Long id);
  TaskDto save(TaskDto taskDto);
  void delete(Long id);
  void update(TaskDto taskDto, Long id);
}
