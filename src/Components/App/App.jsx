import React, { useMemo, useState } from "react";
import InputForm from "../UI/InputForm/InputForm";
import TitleNumber from "../TitleNumber/TitleNumber";
import styles from './App.module.css'
import TasksWithFilter from "../TasksWithFilter/TasksWithFilter";

const FILTER_OPTIONS = [
  { value: 'all', name: 'Все задачи' },
  { value: 'active', name: 'Активные задачи' },
  { value: 'completed', name: 'Завершенные задачи' }
]

function App() {

  const getToDoFromLocalStorage = () => {
    const arrToDo = localStorage.getItem('todo');
    if (arrToDo) {
      return JSON.parse(arrToDo);
    }

    return [];
  }

  const [toDoList, setToDoList] = useState(getToDoFromLocalStorage());

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

  const removeTask = (taskID) => {
    saveItemLocalStorage(toDoList.filter((t) => t.id !== taskID));
  };


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
      <TasksWithFilter 
        choise={FILTER_OPTIONS}
        remove={removeTask}
        info={toDoList}
        onChange={onItemChange}
      />
    </form>
  );
}

export default App;