import React, { useState } from 'react';
import styles from './TasksWithFilter.module.css'
import Select from "../UI/Selector/Select";
import TaskList from "../TaskList/TaskList";
import { useSelector } from 'react-redux';


function TasksWithFilter(props) {

  const [filter, setFilter] = useState('all');

  const currentFilter = (str) => {
    setFilter(str);
  }

  return (
    <div className={styles.container}>
      <div className={styles.select}>
        <p className={styles.title}>
          Фильтрация задач:
        </p>
        <Select
          choise={props.choise}
          value={filter}
          onChange={currentFilter}
        />
      </div>
      <TaskList
        remove={props.remove}
      />
    </div>
  )
}

export default TasksWithFilter;