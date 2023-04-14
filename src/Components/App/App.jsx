import React, { useEffect, useMemo, useState } from "react";
import InputForm from "../UI/InputForm/InputForm";
import TitleNumber from "../TitleNumber/TitleNumber";
import styles from './App.module.css'
import TasksWithFilter from "../TasksWithFilter/TasksWithFilter";
import { getItemFromLocalStorage, setItemToLocalStorage } from "../../localStorage";

const FILTER_OPTIONS = [
  { value: 'all', name: 'All tasks' },
  { value: 'active', name: 'Аctive tasks' },
  { value: 'completed', name: 'Completed tasks' }
]

function App() {

  const [toDoList, setToDoList] = useState(getItemFromLocalStorage('todo', []));


  useEffect(() =>
    setItemToLocalStorage('todo', toDoList));

  const onItemChange = (taskID, title = '') => {
    const arr = toDoList.map((item) => {
      if (item.id == taskID) {
        if (title) {
          return {
            ...item,
            title,
          }
        }
        else {
          return {
            ...item,
            done: !item.done,
          }
        }
      }

      return item;

    });

    setToDoList(arr);
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

    setToDoList([...toDoList, newTask]);
  };

  const removeTask = (taskID) => {
    setToDoList(toDoList.filter((t) => t.id !== taskID));
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
        toDoList={toDoList}
        onChange={onItemChange}
      />
    </form>
  );
}

export default App;