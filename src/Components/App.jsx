import React, {useState} from "react";
import InputForm from "./InputForm";
import TaskList from "./TaskList";
import NumberActive from "./NumberActive";

function App () {
  const [toDoList, setToDoList] = useState([]);

  const newTask = (title) => {
    
    if(!title.trim()) return ;

    const newTask = {
      title: title,
      done: false,
      edit: false,
      id: Date.now(),
    };

    setToDoList([...toDoList, newTask]);
  };

  const activeTasks = (list) => {
    let active = 0;
    list.forEach((item) => {
      if(!item.done) active++;
    })

    return active;
  }

  const removeTask = (taskID) => {
    setToDoList(toDoList.filter((t) => t.id !== taskID));
  };

  const editTask = (taskID) => {
    toDoList.forEach((item) => {
      if(item.id == taskID){
        item.edit = !item.edit;
      }
    });
    setToDoList(toDoList);
  }

    return (
      <form id="components">
        <NumberActive showText="How many tasks to do:" showNum={activeTasks(toDoList)}/>
        <InputForm onClickInput={newTask}/>
        <TaskList edit={editTask} remove = {removeTask} info={toDoList} onClickInput={newTask}/>
      </form>
    );

}

export default App;