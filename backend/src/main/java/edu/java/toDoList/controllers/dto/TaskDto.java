package edu.java.toDoList.controllers.dto;

import edu.java.toDoList.models.entities.Task;

import java.time.LocalDate;

/** Class represent a task DTO.
 * @param id Identifier of the task.
 * @param description Description of the task.
 * @param checked If the task is checked.
 */
public record TaskDto(Long id, String description, boolean checked) {
  public Task toEntity() {
    if (description == null || description.isBlank()) {
      throw new IllegalArgumentException("Description cannot be null");
    } else {
      return new Task(id, description, checked);
    }
  }
}
