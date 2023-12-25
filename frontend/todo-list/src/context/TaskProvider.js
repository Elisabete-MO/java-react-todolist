import React, { useEffect, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import TaskContext from './TaskContext';
import requestAPI from '../services/RequestAPI';

function TaskProvider({ children }) {
  /* armazena a descrição da tarefa */
  const [tasks, setTasks] = useState([]);

  const getTasks = useCallback(async () => requestAPI('GET', 'tasks')
    .then(({ data: tasks }) => {setTasks(tasks)}), []);

  const getTask = async (id) => requestAPI('GET', `tasks/${id}`)
    .then(({ data: task }) => task);

  const addTask = async (description) => requestAPI('POST', 'tasks', {
  description })
    .then(getTasks);

  const rmTask = async (id) => requestAPI('DELETE', `tasks/${id}`)
    .then(getTasks);

  const putTask = async (id, description, checked) => requestAPI('PUT',
  `tasks/${id}`, { description, checked })
    .then(getTasks);

  const value = {
    tasks,
    getTasks,
    getTask,
    addTask,
    rmTask,
    putTask,
  };

  return (
    <TaskContext.Provider value={ value }>
      { children }
    </TaskContext.Provider>
  );
}

TaskProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default TaskProvider;
