import React from "react";
import Button from "./Button";
import InputForm from "./InputForm";

function Task ({remove, edit, task}) {
  if(task.edit){
    return(
      <InputForm onClickInput/>
    );
  }
  else return (
    <li className="items__item">
      <input type="checkbox" className="item__check"></input>
      <p className="item__text">{task.title}</p>
      <Button onClick={remove} option={task.id} title="Delete"/>
      <Button onClick={edit} option={task.id} title="Edit"/>
    </li>
  );
}

export default Task;