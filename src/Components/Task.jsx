import React, { useState } from "react";
import Button from "./UI/Button";
import InputForm from "./UI/InputForm";
import styles from '../styles/Task.module.css'
import { useDispatch } from "react-redux";
import { changeTask } from "../redux/actions";

function Task ({remove, task}) {

  const [edit, setEdit] = useState(task.edit);
  const [done, setDone] = useState(task.done);

  const dispatch = useDispatch();

  const editTask = () => {
    task.edit = !task.edit;
    setEdit(!edit);
  }

  const changeTitle = (str) => {
    task.title = str;
    editTask();
  }

  const doneTask = () => {
    setDone(!done);
    dispatch(changeTask(task.id));
  } 

  const res = edit 
    ? <InputForm name="Edit" onClickInput={changeTitle}/>
    : <li>
        <input type="checkbox" value={done} checked={done} onChange={doneTask}></input>

        {done
          ? <p className={styles.text__done}>{task.title}</p>
          : <p>{task.title}</p>}
        <Button onClick={remove} option={task.id} title="Delete"/>
        <Button onClick={editTask} option={task} title="Edit"/>
      </li>;

    return res;
}

export default Task;