import React, { useState } from 'react';
import styles from './TasksWithFilter.module.css'
import Selector from "../UI/Selector/Selector";
import TaskList from "../TaskList/TaskList";


function TasksWithFilter(props) {

  const getFilterFromLocalStorage = () => {
    const filterLocalStorage = localStorage.getItem('filter');
    if (filterLocalStorage) {
      return JSON.parse(filterLocalStorage);
    }

    return 'all';
  }

  const saveFiletrLocalStorage = (item) => {
    localStorage.setItem('filter', JSON.stringify(item));
  }

  const [filter, setFilter] = useState(getFilterFromLocalStorage());

  const takeTitleFromSelector = (str) => {
    saveFiletrLocalStorage(str);
    setFilter(str);
  }

  return (
    <div className={styles.container}>
      <div className={styles.select}>
        <p className={styles.title}>
          Фильтрация задач:
        </p>
        <Selector
          choise={props.choise}
          value={filter}
          onChange={takeTitleFromSelector}
        />
      </div>
      <TaskList
        remove={props.remove}
        info={props.info}
        filterSelector={filter}
        onChange={props.onChange}
      />
    </div>
  )
}

export default TasksWithFilter;