import React, { useState } from "react";
import Button from "./UI/Button";
import InputForm from "./UI/InputForm";
import styles from '../styles/Task.module.css'

function Task ({onChange, remove, task}) {
  const [edit, setEdit] = useState(task.edit);
  const [done, setDone] = useState(task.done);

  const parseLocStoreArray = () => {
    if (localStorage.getItem('todo')) {
      return JSON.parse(localStorage.getItem('todo'));
    }
    else return [];
  }

  const saveArrLocSt = () => {
    let array = parseLocStoreArray();

    array = array.map((item) => {
      if(task.id == item.id){
        item = task;
      }
      return item;
    });

    localStorage.setItem('todo', JSON.stringify(array));
  }

  const editTask = () => {
    task.edit = !task.edit;
    
    if(!task.edit) saveArrLocSt();
    setEdit(!edit);
  }

  const changeTitle = (str) => {
    task.title = str;
    editTask();
  }

  const doneTask = () => {
    task.done = !task.done;

    saveArrLocSt();
    setDone(!done);
    onChange();
  } 

  const res = edit 
    ? <InputForm name="Edit" value={task.title} onClickInput={changeTitle} disabled={true}/>
    :  <>
        <p 
          className={done ? styles.text__done + 
            " " + styles.text : styles.text}
          >{task.title}</p>
        <Button onClick={editTask} option={task} title="Edit"/>
      </>;

    return (
     <li className={styles.task}>
        <input className={styles.input} type="checkbox" value={done} checked = {done ? true : false}  onChange={doneTask}></input>

        {res}
        <Button onClick={remove} option={task.id} title="Delete"/>
      </li>
    )

}

export default Task;