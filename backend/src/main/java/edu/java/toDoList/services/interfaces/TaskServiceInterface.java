package edu.java.toDoList.services.interfaces;

import edu.java.toDoList.models.entities.Task;
import java.util.List;

public interface TaskServiceInterface {
  List<Task> findAll();
  Task findById(Long id);
  void save(Task task);
  void delete(Long id);
  void update(Task task, Long id);
}
