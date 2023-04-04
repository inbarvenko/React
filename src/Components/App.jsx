import React, {useState} from "react";
import InputForm from "./InputForm";
import TaskList from "./TaskList";

function App () {
  const [toDoList, setToDoList] = useState([]);

  const newTask = (title) => {
    
    const newTask = {
      title: title,
      done: false,
      edit: false,
      id: Date.now(),
    };

    setToDoList([...toDoList, newTask]);
  };

  const removeTask = (taskID) => {
    setToDoList(toDoList.filter((t) => t.id !== taskID));
  };

    return (
      <form id="components">
        <InputForm onClick = {newTask}/>
        <TaskList onClick = {removeTask} list = {toDoList}/>
        {/* <NumberActive list={toDoList}/> */}
      </form>
    );

}

export default App;