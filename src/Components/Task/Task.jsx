import React, { useState } from "react";
import Button from "../UI/Button/Button";
import InputForm from "../UI/InputForm/InputForm";
import styles from './Task.module.css'

function Task({ onChange, remove, task}) {
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState(task.title);

  const editTask = () => {
    setEdit(!edit);
  }

  const changeTitle = (str) => {
    console.log(str);
    setTitle(str);
    editTask();
  }

  const doneTask = () => {
    onChange(task.id);
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
          value={title}
          onClickInput={changeTitle}
          disabled={true}
        />
        : <>
          <p
            className={task.done ? styles.text__done +
              " " + styles.text : styles.text}>
            {title}
          </p>
          <Button
            onClick={editTask}
            option={task}
            title="Edit"
          />
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