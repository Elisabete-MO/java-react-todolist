package edu.java.toDoList.controllers;

import edu.java.toDoList.controllers.dto.TaskDto;
import edu.java.toDoList.services.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

/**
 * Controller for the {@link edu.java.toDoList.models.entities.Task} entity.
 */
@RestController
@RequestMapping(value = "/tasks")
public class TaskController {
  private final TaskService taskService;

  @Autowired
  public TaskController(TaskService taskService) {
    this.taskService = taskService;
  }

  @GetMapping()
  public ResponseEntity<List<TaskDto>> getAllTasks() {
    List<TaskDto> tasks = taskService.findAll();
    if(tasks.isEmpty()) {
      return ResponseEntity.noContent().build();
    }
    return ResponseEntity.ok(tasks);
  }

  @GetMapping(value = "/{id}")
  public ResponseEntity<Optional<TaskDto>> getTaskById(Long id) {
    Optional<TaskDto> task = taskService.findById(id);
    return ResponseEntity.ok(task);
  }

  @PostMapping()
  public ResponseEntity<TaskDto> createTask(@RequestBody TaskDto taskDto) {
    TaskDto newTask = taskService.save(taskDto);
    return ResponseEntity.status(HttpStatus.CREATED).body(newTask);
  }

  @DeleteMapping(value = "/{id}")
  public ResponseEntity<String> deleteTask(@PathVariable Long id) {
    taskService.delete(id);
    return ResponseEntity.ok("Tarefa " + id + " apagada com sucesso!");
  }

  @PutMapping(value = "/{id}")
  public ResponseEntity<Optional<TaskDto>> updateTask(@RequestBody TaskDto taskDto,
                                                      @PathVariable Long id) {
    taskService.update(taskDto, id);
    Optional<TaskDto> updatedTask = taskService.findById(id);
    return ResponseEntity.ok().body(updatedTask);
  }
}
