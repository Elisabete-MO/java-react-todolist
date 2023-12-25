import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import TaskContext from './TaskContext';
import requestAPI from '../services/RequestAPI';

function TaskProvider({ children }) {
  /* armazena a descrição da tarefa */
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => requestAPI('GET', '/')
    .then(({ data: tasks }) => setTasks(tasks));

  const getTask = async (id) => requestAPI('GET', `/${id}`)
    .then(({ data: task }) => task);

  const addTask = async (description) => requestAPI('POST', '/', {
  description })
    .then(getTasks);

  const rmTask = async (id) => requestAPI('DELETE', `/${id}`)
    .then(getTasks);

  const putTask = async (id, description, check) => requestAPI('PUT', `/${id}`,
  { description, check })
    .then(getTasks);

  /* recebe os valores da API */
//  const [data, setData] = useState([]);

//  useEffect(() => {
//    requestAPI().then((result) => {
//      setData(result);
//      setSearch(result);
//    });
//  }, []);

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
