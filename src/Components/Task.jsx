import React from "react";
import Button from "./Button";

function Task ({remove, edit, task}) {
  return (
    <li className="items__item">
      <input type="checkbox" className="item__check"></input>
      <p className="item__text">{task.title}</p>
      <Button onClick={remove} taskID={task.id} title="Delete"/>
      <Button onClick={edit} taskID={task.id} title="Edit"/>
    </li>
  );
}

export default Task;