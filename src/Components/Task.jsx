import React, { useState } from "react";
import Button from "./Button";
import InputForm from "./InputForm";

function Task ({remove, task}) {
  const [edit, setEdit] = useState(task.edit);

  const editTask = () => {
    console.log('editTask');
    task.edit = !task.edit;
    setEdit(!edit);
  }

  const changeTitle = (str) => {
    task.title = str;
    console.log('changeTitle');
    editTask();
  }

  const res = edit 
    ? <InputForm name="Edit" onClickInput={changeTitle}/>
    : <li>
        <input type="checkbox" ></input>
        <p >{task.title}</p>
        <Button onClick={remove} option={task.id} title="Delete"/>
        <Button onClick={editTask} option={task} title="Edit"/>
      </li>;

    return res;
}

export default Task;