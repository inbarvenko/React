import React, { useMemo, useEffect } from "react";
import InputForm from "../UI/InputForm/InputForm";
import TitleNumber from "../TitleNumber/TitleNumber";
import styles from './App.module.css'
import { useSelector } from "react-redux";
import TasksWithFilter from "../TasksWithFilter/TasksWithFilter";
import { currentToDoList } from "../../redux/selectors";
import { setItemToLocalStorage } from "../../localStorage";
import { addTask } from '../../redux/toDoList';
import { useDispatch } from 'react-redux';

function App() {

  const toDoList = useSelector(currentToDoList);
  const dispatch = useDispatch();

  useEffect(() =>
    setItemToLocalStorage('todo', toDoList),
    [toDoList]);

  const activeTasks = useMemo(() => {
    const arr = toDoList.filter((item) => !item.done);
    return arr.length;
  }, [toDoList]);

  const newTask = (title) => {
    console.log(title)
    if (!title.trim()) return;

    dispatch(addTask(title));
  };


  return (
    <div className={styles.components}>
      <TitleNumber
        showText="Сколько задач осталось:"
        showNum={activeTasks}
      />
      <InputForm
        onClickSave={newTask}
        buttonName="Add"
      />
      <TasksWithFilter
      />
    </div>
  );
}

export default App;