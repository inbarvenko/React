import React from "react";
import Buttons from "./Buttons";

function Task (props) {
  
  return (
    <li id = "li_{props.task.id}" className="items__item">
      <input type="checkbox" className="item__check"></input>
      <p className="item__text">{props.task.title}</p>
      <Buttons />
    </li>
  );
}

export default Task;