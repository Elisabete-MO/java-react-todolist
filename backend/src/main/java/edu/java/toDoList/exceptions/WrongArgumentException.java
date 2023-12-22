package edu.java.toDoList.exceptions;

/**
 * Exception to be thrown when an invalid argument is passed to a method.
 */
public class WrongArgumentException extends RuntimeException {

    public WrongArgumentException(String message) {
      super(message);
    }
}
