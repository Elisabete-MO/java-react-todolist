import React, { useState, useContext, useEffect } from 'react';
import TaskContext from '../context/TaskContext';
import '../styles/task_form.css';

export default function TaskForm() {
  const { data, selected, setSelected, selectedFilters, setSelectedFilters,
    setSearch, task, addTask } = useContext(TaskContext);

  /* armazena a descrição da task */
  const [description, setDescription] = useState("");

  const handleAdd = async () => addTask(description);

//  const [sort, setSort] = useState({
//    column: 'population',
//    direction: 'ASC',
//  });
//
//  const filterData = () => {
//    const dataFilter = data.filter((el) => el.name.toUpperCase()
//      .includes(inputs.name.toUpperCase()));
//    setSearch(dataFilter);
//  };

//  useEffect(() => {
//    filterData();
//  }, [inputs.task]);

  return (
    <main className="box_form">
      <div className="box_insert">
        <label htmlFor="taskIns">
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
      <div className="box_filters">
        <button
          type="button"
          className="btnFilter"
          onClick={ () => {
            setSelectedFilters([...selectedFilters, selected]);
            setSelected({
              column: 'population',
              comparison: 'maior que',
              value: 0,
            });
          } }
        >
          Filtrar
        </button>
        <button
          type="button"
          className="btnRem"
          onClick={ () => {
            setSelectedFilters([]);
            setSelected({
              column: 'population',
              comparison: 'maior que',
              value: 0,
            });
          } }
        >
          Limpar Filtros
        </button>
      </div>
    </main>
  );
}
