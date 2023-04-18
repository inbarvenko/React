import React, { useState } from "react";
import Button from "../UI/Button/Button";
import InputForm from "../UI/InputForm/InputForm";
import styles from './Task.module.css';
import { useDispatch } from "react-redux";
import { changeTitleTask, changeStatusTask, removeTask } from "../../redux/toDoList";

function Task({ task }) {
  const [edit, setEdit] = useState(false);

  const dispatch = useDispatch();

  const editTask = () => {
    setEdit(!edit);
  }

  const changeTitle = (title='') => {
    if(title) {
      dispatch(changeTitleTask(task.id, title));
    }
    editTask();
  }

  const doneTask = () => {
    dispatch(changeStatusTask(task.id));
  }

  const onButtonClick = (event) => {
    event.preventDefault();
    dispatch(removeTask(task.id));
  }

  return (
    <li className={styles.task}>
      <input
        className={styles.input}
        type="checkbox"
        checked={task.done}
        onChange={doneTask} />

      {edit
        ? <InputForm
          value={task.title}
          onClickInput={changeTitle}
          disabled={true}
          blur={true}
        />
        : <>
          <p 
            className={`${styles.text} ${task.done ? styles.text__done : ''}`}
            onDoubleClick={editTask}
          >
            {task.title}
          </p>
        </>}
      <Button
        onClick={onButtonClick}
        title="Delete"
      />
    </li>
  )
}

export default Task;