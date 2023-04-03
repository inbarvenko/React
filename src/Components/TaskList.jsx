import React from "react";
import Task from "./Task";

function TaskList ({remove_task, list}) {
  return(
    <div className = "container__list" id="container__list">
      <ul id = "todo" className = "list__items">
        {list.map(item =>
          <Task remove_task = {remove_task} task = {item} key = {item.id}/>
          )}
      </ul>
    </div>
  );
}

export default TaskList;