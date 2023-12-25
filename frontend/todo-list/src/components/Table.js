import React, { useContext, useEffect } from 'react';
import TaskContext from '../context/TaskContext';
import '../styles/table.css';
import TableContent from './TableContent';

export default function Table() {
  const { tasks, getTasks } = useContext(TaskContext);

  useEffect(()=>{
    if(tasks.length === 0){
      getTasks();
    }
  }, [tasks, getTasks]);

  return (
    <div className="box_table">
      { tasks.length > 0 &&
        tasks.map(({ id, description, check }, index) => (
          <TableContent
            key={`${index}${Date.now()}`}
            index={index}
            id={id}
            description={description}
            check={check}
          />
      ))}
    </div>
  );
}
