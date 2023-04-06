import React, { useState } from "react";
import Button from "./UI/Button";
import InputForm from "./UI/InputForm";
import styles from '../styles/Task.module.css'

function Task ({remove, task}) {
  const [edit, setEdit] = useState(task.edit);
  const [done, setDone] = useState(task.done);

  const editTask = () => {
    task.edit = !task.edit;
    setEdit(!edit);
  }

  const changeTitle = (str) => {
    task.title = str;
    console.log('changeTitle');
    editTask();
  }

  const doneTask = () => {
    task.done = !task.done;
    setDone(!done);
  } 

  const res = edit 
    ? <InputForm name="Edit" onClickInput={changeTitle}/>
    : <li>
        {done 
        ? <input type="checkbox" value={done} checked onChange={doneTask}></input>
        : <input type="checkbox" value={done} onChange={doneTask}></input>}

        {done
          ? <p className={styles.text__done}>{task.title}</p>
          : <p>{task.title}</p>}
        <Button onClick={remove} option={task.id} title="Delete"/>
        <Button onClick={editTask} option={task} title="Edit"/>
      </li>;

    return res;
}

export default Task;