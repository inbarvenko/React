import React from "react";
import Task from "./Task";

function TaskList ({remove, info, edit}) {

  return(
    <div className = "container__list" id="container__list">
      <ul id = "todo" className = "list__items">
        {info.map((item) => {
          return <Task edit={edit} remove={remove} task={item} key={item.id}/>
        }
          )}
      </ul>
    </div>
  );
}

export default TaskList;