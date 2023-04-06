import React, {useMemo, useState} from "react";
import InputForm from "./InputForm";
import TaskList from "./TaskList";
import NumberActive from "./NumberActive";
import Selector from "./Selector";

function App () {
  const [toDoList, setToDoList] = useState([]);
  const [filter, setFilter] = useState('all');

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
  };

  const removeTask = (taskID) => {
    setToDoList(toDoList.filter((t) => t.id !== taskID));
  };



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