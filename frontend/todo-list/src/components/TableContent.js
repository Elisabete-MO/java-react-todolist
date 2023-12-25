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
    <div>
      { editMode ?
        (
          <>
            <div className="item-row-desc">
              <input
                data-testid={`todo-task-edit-input-${index}`}
                value={inputDescription}
                onChange={editHandle}
              />
            </div>
            <div>
              <button
                data-testid={`todo-task-edit-save-btn-${index}`}
                style={{ marginRight: '5px' }}
                onClick={editSave}
              >Check</button>
              <button
                data-testid={`todo-task-edit-cancel-btn-${index}`}
                onClick={()=>setEditMode(false)}
              >Cancel</button>
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
              className={("item-row-desc", check && "item-row-desc-check")}
            >{description}</div>
            <div style={{ width: '66px'}}>
              <button
                data-testid={`todo-task-edit-mode-btn-${index}`}
                style={{ marginRight: '5px' }}
                onClick={()=>setEditMode(true)}
              >Editar</button>
              <button
                data-testid={`todo-task-remove-btn-${index}`}
                onClick={()=>rmTask(id)}
              >Remove</button>
            </div>
          </>
        )
      }
    </div>
  );
}
