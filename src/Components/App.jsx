import React, {useState} from "react";
import InputForm from "./InputForm";
import TaskList from "./TaskList";
import NumberActive from "./NumberActive";
import Selector from "./Selector";

function App () {
  const [toDoList, setToDoList] = useState([]);
  const [filter, setFilter] = useState('all');

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
    if (!list.length) return 0;

    let active = 0;
    list.forEach((item) => {
      if(!item.done) active++;
    })

    console.log(list);

    return active;
  }

  const removeTask = (taskID) => {
    setToDoList(toDoList.filter((t) => t.id !== taskID));
  };

  const editTask = (e, taskID) => {
    e.preventDefault();

    toDoList.forEach((item) => {
      if(item.id == taskID){
        item.edit = !item.edit;
      }
    });

    console.log(toDoList);
    setToDoList(toDoList);
  }

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

    console.log(list);
    return resList;

  } 

  const setSelectedItem = (filterItem) => {
    setFilter(filterItem);
    // setToDoList(filterList(toDoList, filterItem));
  }


    return (
      <form id="components">
        <NumberActive
          showText="How many tasks to do:"
          showNum={activeTasks(toDoList)}
        />
        <InputForm onClickInput={newTask}/>
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
          edit={editTask}
          remove={removeTask}
          info={filterList(toDoList, filter)}
          onClickInput={newTask}
        />
      </form>
    );

}

export default App;