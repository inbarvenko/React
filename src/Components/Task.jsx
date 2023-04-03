import React from "react";
import Buttons from "./Buttons";

function Task ({remove_task, task}) {
  return (
    <li id = "li_{props.task.id}" className="items__item">
      <input type="checkbox" className="item__check"></input>
      <p className="item__text">{task.title}</p>
      <Buttons remove_task = {remove_task} task={task} />
    </li>
  );
}

export default Task;