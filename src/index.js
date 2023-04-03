import React, {useState, useContext} from 'react'
import ReactDOM from 'react-dom/client'
import TaskList from './Components/TaskList';
import NumberActive from './Components/NumberActive';
import InputForm from './Components/InputForm';

  function ToDo () {
    const [toDoList, setToDoList] = useState([]);

    const newTask = (task) => {
      setToDoList([...toDoList, task]);
    };

    const removeTask = (task) => {
      setToDoList(toDoList.filter((t) => t.id !== task.id));
    };
    // const context = React.createContext(removeTask);

      return (
        <div id="components">
          <InputForm new_task = {newTask}/>
          <TaskList remove_task = {removeTask} list = {toDoList}/>
          {/* <NumberActive list={toDoList}/> */}
        </div>
      );

  }
  
  // ========================================
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<ToDo />);