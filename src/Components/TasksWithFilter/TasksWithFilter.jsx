import React, { useState, useEffect } from 'react';
import styles from './TasksWithFilter.module.css'
import Selector from "../UI/Selector/Selector";
import TaskList from "../TaskList/TaskList";
import { getItemFromLocalStorage, setItemToLocalStorage } from '../../localStorage';


function TasksWithFilter(props) {

  const [filter, setFilter] = useState(getItemFromLocalStorage('filter', 'all'));

  const takeTitleFromSelector = (str) => {
    setFilter(str);
  }

  useEffect(() => {
    setItemToLocalStorage('filter', filter);
  });

  const filterList = () => {
    switch (filter) {
      case 'active':
        return props.toDoList.filter((task) => !task.done);
      case 'completed':
        return props.toDoList.filter((task) => task.done);
      default:
        return props.toDoList;
    }
  };

  const filteredToDo = filterList();

  return (
    <div className={styles.container}>
      <div className={styles.select}>
        <p className={styles.title}>
          Filter of Tasks:
        </p>
        <Selector
          choise={props.choise}
          value={filter}
          onChange={takeTitleFromSelector}
        />
      </div>
      <TaskList
        remove={props.remove}
        filteredToDo={filteredToDo}
        onChange={props.onChange}
      />
    </div>
  )
}

export default TasksWithFilter;