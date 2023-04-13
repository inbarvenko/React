import React, { useEffect, useMemo } from "react";
import InputForm from "../UI/InputForm/InputForm";
import TitleNumber from "../TitleNumber/TitleNumber";
import styles from './App.module.css'
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, addTask } from "../../redux/actions";
import TasksWithFilter from "../TasksWithFilter/TasksWithFilter";
import { currentToDoList } from "../../redux/selectors";

const FILTER_OPTIONS = [
  { value: 'all', name: 'Все задачи' },
  { value: 'active', name: 'Активные задачи' },
  { value: 'completed', name: 'Завершенные задачи' }
]

function App() {

  const toDoList = useSelector(currentToDoList);

  //redux
  const dispatch = useDispatch();

  // useEffect(() =>
  //   localStorage.setItem('todo', JSON.stringify(toDoList)));

  const activeTasks = useMemo(() => {
    const arr = toDoList.filter((item) => !item.done);
    return arr.length;
  }, [toDoList]);


  const newTask = (title) => {
    if (!title.trim()) return;

    dispatch(addTask(title));
  };

  const removeTask = (taskID) => {
    dispatch(deleteTask(taskID));
  };


  return (
    <form className={styles.components}>
      <TitleNumber
        showText="Сколько задач осталось:"
        showNum={activeTasks}
      />
      <InputForm
        onClickInput={newTask}
        name="Add"
      />
      <TasksWithFilter
        choise={FILTER_OPTIONS}
        remove={removeTask}
      />
    </form>
  );
}

export default App;