import React, { useState, useEffect } from 'react';
import styles from './TasksWithFilter.module.css'
import Select from "../UI/Selector/Select";
import TaskList from "../TaskList/TaskList";
import { getItemFromLocalStorage, setItemToLocalStorage } from '../../localStorage';
import { all, active, completed } from '../../redux/slicers';


function TasksWithFilter(props) {

  const [filter, setFilter] = useState(getItemFromLocalStorage('filter', 'all'));

  const takeTitleFromSelector = (str) => {
    setFilter(str);
  }


  useEffect(() => {
    setItemToLocalStorage('filter', filter);
  });

  const filteredToDos = (state) => state.dispatch(filter)


  return (
    <div className={styles.container}>
      <div className={styles.select}>
        <p className={styles.title}>
          Filter of Tasks:
        </p>
        <Select
          choise={props.choise}
          value={filter}
          onChange={takeTitleFromSelector}
        />
      </div>
      <TaskList/>
    </div>
  )
}

export default TasksWithFilter;