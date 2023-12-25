import React, { useEffect } from 'react';
import './App.css';
import TaskProvider from './context/TaskProvider';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import Table from './components/Table';

export default function App() {
  useEffect(() => {
    document.title = 'Gerenciador de Tarefas';
  }, []);
  return (
    <>
      <TaskProvider displayName="Context Display Name">
        <div className="content">
          <Header />
          <TaskForm />
          <Table />
        </div>
      </TaskProvider>
    </>
  );
}