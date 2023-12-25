import React, { useState, useContext, useEffect } from 'react';
import TaskContext from '../context/TaskContext';
import '../styles/task_form.css';

export default function TaskForm() {
  const { addTask } = useContext(TaskContext);
  /* armazena a descrição da task */
  const [description, setDescription] = useState("");

  const handleAdd = async () => addTask(description);

  return (
    <main className="box_form">
      <div className="box_insert">
        <label htmlFor="taskIns">
          Nova Tarefa:
          <input
            type="text"
            className="taskIns"
            id="taskIns"
            name="task"
            placeholder="Descreva a tarefa"
            value={ description }
            onChange={ ({target: { value }}) => setDescription(value) } // salva os inputs no estado da aplicação
          />
        </label>
        <button
          type="button"
          className="btnIns"
          onClick={ handleAdd }
        >
          Adicionar
        </button>
      </div>
    </main>
  );
}
