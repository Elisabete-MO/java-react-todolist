package edu.java.toDoList.services;

import edu.java.toDoList.controllers.dto.TaskDto;
import edu.java.toDoList.models.entities.Task;
import edu.java.toDoList.models.repositories.TaskRepository;
import edu.java.toDoList.services.interfaces.TaskServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * Implementation of the <b>Strategy</b> {@link TaskServiceInterface}, which
 * can be injected by Spring (via {@link Autowired}).
 */
@Service
public class TaskService implements TaskServiceInterface {

  @Autowired
  private TaskRepository taskRepository;

  @Override
  public List<TaskDto> findAll() {
    List<Task> tasks = taskRepository.findAll();
    return tasks.stream().map(e -> new TaskDto(
        e.getId(),
        e.getDescription(),
        e.getChecked())).toList();
  }

  @Override
  public TaskDto findById(Long id) {
    Task task = taskRepository.findById(id)
        .orElseThrow(() -> new TaskNotFoundException("Tarefa não encontrada!"));

    return new TaskDto(
        task.getId(),
        task.getDescription(),
        task.getChecked());
  }

  @Override
  public void save(Task task) {
    taskRepository.save(task);
  }

  @Override
  public void delete(Long id) {
    Optional<Task> task = Optional.ofNullable(taskRepository.findById(id)
        .orElseThrow(() -> new TaskNotFoundException("Tarefa não encontrada!")));
    task.ifPresent(taskRepository::delete);
  }

  @Override
  public void update(Task task, Long id) {
    Optional<Task> taskToUpdate = Optional.ofNullable(taskRepository.findById(id)
        .orElseThrow(() -> new TaskNotFoundException("Tarefa não encontrada!")));
    taskToUpdate.ifPresent(t -> {
      t.setDescription(task.getDescription());
      t.setChecked(task.getChecked());
      taskRepository.save(t);
    });
  }
}
