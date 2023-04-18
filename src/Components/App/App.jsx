import React, { useMemo, useEffect } from "react";
import InputForm from "../UI/InputForm/InputForm";
import TitleNumber from "../TitleNumber/TitleNumber";
import styles from './App.module.css'
import { useSelector } from "react-redux";
import TasksWithFilter from "../TasksWithFilter/TasksWithFilter";
import { currentToDoList } from "../../redux/selectors";
import { setItemToLocalStorage } from "../../localStorage";

const FILTER_OPTIONS = [
  { value: 'all', name: 'All tasks' },
  { value: 'active', name: 'Аctive tasks' },
  { value: 'completed', name: 'Completed tasks' }
]

function App() {

  const toDoList = useSelector(currentToDoList);

  useEffect(() =>
    setItemToLocalStorage('todo', toDoList));

  const activeTasks = useMemo(() => {
    const arr = toDoList.filter((item) => !item.done);
    return arr.length;
  }, [toDoList]);


  return (
    <form className={styles.components}>
      <TitleNumber
        showText="Сколько задач осталось:"
        showNum={activeTasks}
      />
      <InputForm
        name="Add"
      />
      <TasksWithFilter
        choise={FILTER_OPTIONS}
      />
    </form>
  );
}

export default App;