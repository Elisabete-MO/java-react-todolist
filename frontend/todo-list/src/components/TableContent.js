import React, { useContext, useState } from 'react';
import TaskContext from '../context/TaskContext';
import '../styles/table_content.css';

export default function TableContent({ index, id, description, check }) {
  const [editMode, setEditMode] = useState(false);
  const [inputDescription, setInputDescription] = useState(description);

  const { putTask, rmTask } = useContext(TaskContext);

  const editHandle = ({ target: { value } }) => setInputDescription(value);

  const editSave = async () => putTask(id, inputDescription, check);

  const changeCheck = async ({target: { checked }}) => putTask(id, description, checked);

  return (
    <div className="table_row">
      { editMode ?
        (
          <>
            <div className="table_row-desc">
              <input
                id={`todo-task-edit-input-${index}`}
                value={inputDescription}
                onChange={editHandle}
              />
            </div>
            <div>
              <button
                type="button"
                className="btnEdit"
                id={`todo-task-edit-save-btn-${index}`}
                onClick={editSave}
              >Check
              </button>
              <button
                type="button"
                className="btnRem"
                id={`todo-task-edit-cancel-btn-${index}`}
                onClick={()=>setEditMode(false)}
              >Cancel
              </button>
            </div>
          </>
        ) :
        (
          <>
            <input
              data-testid={`todo-task-check-input-${index}`}
              type="checkbox"
              id="scales"
              name="scales"
              defaultChecked={check}
              onChange={changeCheck}
            />
            <div
              className={("table_row-desc", check && "table_row-desc-check")}
            >{description}</div>
              <button
                type="button"
                className="btnEdit"
                data-testid={`todo-task-edit-mode-btn-${index}`}
                onClick={()=>setEditMode(true)}
              >Editar
              </button>
              <button
                type="button"
                className="btnRem"
                data-testid={`todo-task-remove-btn-${index}`}
                onClick={()=>rmTask(id)}
              >Remover
              </button>
          </>
        )
      }
    </div>
  );
}
