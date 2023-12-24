package edu.java.toDoList.services;

import edu.java.toDoList.controllers.dto.TaskCreationDto;
import edu.java.toDoList.controllers.dto.TaskDto;
import edu.java.toDoList.exceptions.TaskNotFoundException;
import edu.java.toDoList.models.entities.Task;
import edu.java.toDoList.models.repositories.TaskRepository;
import edu.java.toDoList.services.interfaces.TaskServiceInterface;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
  public Optional<TaskDto> findById(Long id) {
    return taskRepository.findById(id)
        .map(e -> new TaskDto(
            e.getId(),
            e.getDescription(),
            e.getChecked()))
        .map(Optional::of)
        .orElseThrow(() -> new TaskNotFoundException("Tarefa não encontrada!"));
  }

  @Override
  public TaskDto save(TaskCreationDto taskDto) {
    return TaskDto.fromEntity(taskRepository.save(taskDto.toEntity()));
  }

  @Override
  public void delete(Long id) {
    Optional<Task> task = Optional.ofNullable(taskRepository.findById(id)
        .orElseThrow(() -> new TaskNotFoundException("Tarefa não encontrada!")));
    task.ifPresent(taskRepository::delete);
  }

  @Override
  public void update(TaskDto taskDto, Long id) {
    Optional<Task> taskToUpdate = Optional.ofNullable(taskRepository.findById(id)
        .orElseThrow(() -> new TaskNotFoundException("Tarefa não encontrada!")));

    taskToUpdate.ifPresent(t -> {
      t.setDescription(taskDto.toEntity().getDescription());
      t.setChecked(taskDto.toEntity().getChecked());
      taskRepository.save(t);
    });
  }
}
