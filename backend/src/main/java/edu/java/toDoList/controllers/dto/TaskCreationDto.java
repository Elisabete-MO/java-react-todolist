package edu.java.toDoList.controllers.dto;

import edu.java.toDoList.exceptions.WrongArgumentException;
import edu.java.toDoList.models.entities.Task;

/** Class represent a task to be created.
 * @param description Description of the task.
 * @param checked If the task is checked.
 */
public record TaskCreationDto(String description, boolean checked) {
  public Task toEntity() {
    if (description == null || description.isBlank()) {
      throw new WrongArgumentException("Description cannot be null");
    } else {
      return new Task(null, description, checked);
    }
  }
}
