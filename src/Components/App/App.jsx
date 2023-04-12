import React, { useMemo, useState } from "react";
import InputForm from "../UI/InputForm/InputForm";
import TaskList from "../TaskList/TaskList";
import TitleNumber from "../TitleNumber/TitleNumber";
import Selector from "../UI/Selector/Selector";
import styles from './App.module.css'

const FILTER_OPTIONS = [
  { value: 'all', name: 'Все задачи' },
  { value: 'active', name: 'Активные задачи' },
  { value: 'completed', name: 'Завершенные задачи' }
]

function App() {

  const getItemFromLocalStorage = (item, valueDefault) => {
    if (localStorage.getItem(item)) {
      return JSON.parse(localStorage.getItem(item));
    }

    return valueDefault;
  }

  const [toDoList, setToDoList] = useState(getItemFromLocalStorage('todo', []));
  const [filter, setFilter] = useState(getItemFromLocalStorage('filter', 'all'));

  const saveFilter = (filterItem) => {
    localStorage.setItem('filter', JSON.stringify(filterItem));
    setFilter(filterItem);
  }

  const saveToDoList = (list) => {
    localStorage.setItem('todo', JSON.stringify(list));
    setToDoList(list);
  }

  const onItemChange = (taskID) => {
    const arr = toDoList.map((item) => {
      if (item.id == taskID){
        item.done = !item.done;
      }
      return item;
    });
    
    saveToDoList(arr);
  }

  const filteredList = useMemo(() => {
    switch (filter) {
      case 'active':
        return toDoList.filter((task) => !task.done);
      case 'completed':
        return toDoList.filter((task) => task.done);
      default:
        return toDoList;
    }
  }, [toDoList, filter])


  const addTask = (title) => {
    if (!title.trim()) return;

    console.log('addTask')

    const newTask = {
      title: title,
      done: false,
      id: Date.now(),
    };

    saveToDoList([...toDoList, newTask]);
  };

  const activeTasks = (list) => {

    let active = 0;
    list.forEach((item) => {
      if (!item.done){
        active++;
      }
    })

    return active;
  };

  const removeTask = (taskID) => {
    saveToDoList(toDoList.filter((t) => t.id !== taskID));
  };


  return (
    <form className={styles.components}>
      <TitleNumber
        showText="Сколько задач осталось:"
        showNum={activeTasks(toDoList)}
      />
      <InputForm
        onClickInput={addTask}
        name="Add"
      />
      <div className={styles.select}>
        <p className={styles.title}>
          Фильтрация задач:
        </p>
        <Selector
          choise={FILTER_OPTIONS}
          value={filter}
          onChange={saveFilter}
        />
      </div>
      <TaskList
        remove={removeTask}
        info={filteredList}
        onChange={onItemChange}
      />
    </form>
  );
}

export default App;