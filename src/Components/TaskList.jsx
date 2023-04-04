import React from "react";
import Task from "./Task";
import InputForm from "./InputForm";

function TaskList ({remove, info, edit}) {
  return(
    <div className = "container__list" id="container__list">
      <ul id = "todo" className = "list__items">
        {info.map((item) => {
          if(item.edit){
            // return <InputForm onClickInput={onClickInput} />
          }
          return <Task edit={edit} remove={remove} task={item} key={item.id}/>
        }
          )}
      </ul>
    </div>
  );
}

export default TaskList;