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
    onChange(task.id, title);
    editTask();
  }

  const doneTask = () => {
    onChange(task.id);
  }

  let style_title = `${styles.text}`;
  if(task.done){
    style_title+=` ${styles.text__done}`;
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
        />
        : <>
          <p 
            className={style_title}
            onDoubleClick={editTask}
          >
            {task.title}
          </p>
        </>}
      <Button
        onClick={remove}
        option={task.id}
        title="Delete"
      />
    </li>
  )
}

export default Task;