import React from "react";
import Buttons from "./Buttons";

function Task ({onClick, task}) {
  return (
    <li id = "li_{props.task.id}" className="items__item">
      <input type="checkbox" className="item__check"></input>
      <p className="item__text">{task.title}</p>
      <Buttons onClick = {onClick} taskID={task.id} />
    </li>
  );
}

export default Task;