import React from "react";
import Task from "./Task";

function TaskList ({remove, info}) {
  return(
    <div>
      <ul>
        {info.map((item) => {
          return <Task remove={remove} task={item} key={item.id}/>
        }
          )}
      </ul>
    </div>
  );
}

export default TaskList;