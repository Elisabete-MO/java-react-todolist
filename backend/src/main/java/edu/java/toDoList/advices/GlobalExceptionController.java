package edu.java.toDoList.advices;

import edu.java.toDoList.exceptions.TaskNotFoundException;
import edu.java.toDoList.exceptions.WrongArgumentException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

/**
 * Global exception handler.
 */
@ControllerAdvice
public class GlobalExceptionController {

  @ExceptionHandler(TaskNotFoundException.class)
  public ResponseEntity<String> handleTaskNotFoundException(RuntimeException e) {
    return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
  }

  @ExceptionHandler(WrongArgumentException.class)
  public ResponseEntity<String> handleWrongArgumentException(RuntimeException e) {
    return ResponseEntity.status(HttpStatus.FORBIDDEN).body(e.getMessage());
  }
}
