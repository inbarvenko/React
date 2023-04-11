import React, {useState} from "react";
import InputForm from "./UI/InputForm";
import TaskList from "./TaskList";
import NumberActive from "./NumberActive";
import Selector from "./UI/Selector";
import styles from '../styles/App.module.css'

function App () {

  const geListFromtLocSt = () => {
    if (localStorage.getItem('todo')) {
      return JSON.parse(localStorage.getItem('todo'));
    }
    else return [];
  }

  const geFilterFromtLocSt = () => {
    if (localStorage.getItem('todo')) {
      return JSON.parse(localStorage.getItem('filter'));
    }
    else return [];
  }

  const [toDoList, setToDoList] = useState(geListFromtLocSt());
  const [filter, setFilter] = useState(geFilterFromtLocSt());
  const [changeItem, setChangeItem] = useState(false);

  const onItemChange = () => {
    setChangeItem(!changeItem);
  }

  const saveFilter = (filterItem) => {
    setFilter(filterItem);
    localStorage.setItem('filter', JSON.stringify(filterItem));
  }

  const saveToDoList = (list) => {
    setToDoList(list);
    localStorage.setItem('todo', JSON.stringify(list));
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

    return resList;
  };
  
  const addTask = (title) => {
    if(!title.trim()) return;

    const newTask = {
      title: title,
      done: false,
      edit: false,
      id: Date.now(),
    };

    saveToDoList([...toDoList, newTask]);
  };

  const activeTasks = (list) => {
    let active = 0;
    list.forEach((item) => {
      if(!item.done) active++;
    })

    return active;
  };

  const removeTask = (taskID) => {
    saveToDoList(toDoList.filter((t) => t.id !== taskID));
  };


    return (
      <form className={styles.components}>
        <NumberActive
          showText="Сколько задач осталось:"
          showNum={activeTasks(toDoList)}
        />
        <InputForm 
          onClickInput={addTask}
          name="Add"
          disabled = {false}
          value=''
        />
        <div className={styles.select}>
          <p className={styles.title}>Фильтрация задач:</p>
          <Selector
            choise={[
              {value: 'all', name: 'Все задачи'},
              {value: 'active', name: 'Активные задачи'},
              {value: 'completed', name: 'Завершенные задачи'}
            ]}
            value = {filter}
            onChange = {saveFilter}
          />
        </div>
        <TaskList 
          remove={removeTask}
          info={filterList(toDoList, filter)}
          onChange={onItemChange}
        />
      </form>
    );
}

export default App;