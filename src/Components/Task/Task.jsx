import React, { useState } from "react";
import Button from "../UI/Button/Button";
import InputForm from "../UI/InputForm/InputForm";
import styles from './Task.module.css'

function Task({ onChange, remove, task }) {
  const [edit, setEdit] = useState(false);

  const editTask = () => {
    setEdit(!edit);
  }

  const changeTitle = (title) => {
    console.log(title);
    onChange(task.id, title);
    editTask();
  }

  const doneTask = () => {
    onChange(task.id);
  }

  const onButtonClick = (event) => {
    event.preventDefault();
    remove(task.id);
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
          name="Edit"
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