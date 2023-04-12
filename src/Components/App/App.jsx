import React, { useMemo, useState, useRef } from "react";
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
  const filter = useRef(getItemFromLocalStorage('filter', 'all'));
  // const [filter, setFilter] = useState(getItemFromLocalStorage('filter', 'all'));

  const saveItemLocalStorage = (item) => {
    localStorage.setItem('todo', JSON.stringify(item));
    setToDoList(item);
  }

  const onItemChange = (taskID, title = '') => {
    const arr = toDoList.map((item) => {
      if (item.id == taskID) {
        if (title) {
          item.title = title;
        }
        else {
          item.done = !item.done;
        }
      }

      return item;
    });

    saveItemLocalStorage(arr);
  }

  // const filteredList = useMemo(() => {
  //   switch (filter) {
  //     case 'active':
  //       return toDoList.filter((task) => !task.done);
  //     case 'completed':
  //       return toDoList.filter((task) => task.done);
  //     default:
  //       return toDoList;
  //   }
  // }, [toDoList, filter]);

  const activeTasks = useMemo(() => {
    const arr = toDoList.filter((item) => !item.done);
    return arr.length;
  }, [toDoList]);


  const addTask = (title) => {
    if (!title.trim()) return;

    const newTask = {
      title: title,
      done: false,
      id: Date.now(),
    };

    saveItemLocalStorage([...toDoList, newTask]);
  };

  // const activeTasks = (list) => {

  //   const active = 0;
  //   list.forEach((item) => {
  //     if (!item.done){
  //       active++;
  //     }
  //   })

  //   return active;
  // };

  const removeTask = (taskID) => {
    saveItemLocalStorage(toDoList.filter((t) => t.id !== taskID));
  };

  const takeTitleFromSelector = (str) => {
    filter.current = str;

    localStorage.setItem('filter', JSON.stringify(str));
  }


  return (
    <form className={styles.components}>
      <TitleNumber
        showText="Сколько задач осталось:"
        showNum={activeTasks}
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
          value={filter.current}
          onChange={takeTitleFromSelector}
          ref={filter}
        />
      </div>
      <TaskList
        remove={removeTask}
        info={toDoList}
        filterSelector={filter.current}
        onChange={onItemChange}
      />
    </form>
  );
}

export default App;