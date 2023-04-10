import React, {useState} from "react";
import InputForm from "./UI/InputForm";
import TaskList from "./TaskList";
import NumberActive from "./NumberActive";
import Selector from "./UI/Selector";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask } from "../redux/actions";

function App () {
  //react hooks
  // const [toDoList, setToDoList] = useState([]);
  const [filter, setFilter] = useState('all');

  //redux
  const dispatch = useDispatch();

  const toDoList = useSelector(state => {
    const {appReducer} = state;
    return appReducer.toDoList;
  })

  const filterList = (list, filter) => {
    let resList = [];
    switch (filter) {
      case 'all':
        resList = list;
        break;
      case 'active':
        resList = list.filter((task) => !task.done);
        break;
      case 'completed':
        resList = list.filter((task) => task.done);
        break;
      default: 
        return;
    }

    return resList;
  };

  const setSelectedItem = (filterItem) => {
    setFilter(filterItem);
  };
  
  const newTask = (title) => {
    if(!title.trim()) return;

    dispatch(addTask(title));
  };

  const activeTasks = (list) => {
    let active = 0;
    list.forEach((item) => {
      if(!item.done) active++;
    })

    return active;
  };

  const removeTask = (taskID) => {
    dispatch(deleteTask(taskID));
    // setToDoList(toDoList.filter((t) => t.id !== taskID));
  };

  // const reRenderTask = () => {
  //   dispatch(doneTask());
  // }


    return (
      <form id="components">
        <NumberActive
          showText="How many tasks to do:"
          showNum={activeTasks(toDoList)}
        />
        <InputForm 
          onClickInput={newTask}
          name="Add"
        />
        <Selector
          choise={[
            {value: 'all', name: 'Все задачи'},
            {value: 'active', name: 'Активные задачи'},
            {value: 'completed', name: 'Завершенные задачи'}
          ]}
          value = {filter}
          onChange = {setSelectedItem}
        />
        <TaskList 
          remove={removeTask}
          info={filterList(toDoList, filter)}
          onClickInput={newTask}
        />
      </form>
    );
}

export default App;