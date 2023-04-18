import React, { useState, useEffect } from 'react';
import styles from './TasksWithFilter.module.css'
import Select from "../UI/Select/Select";
import TaskList from "../TaskList/TaskList";
import { useSelector } from 'react-redux';
import { currentFilter } from '../../redux/selectors';
import { setItemToLocalStorage } from '../../localStorage';


function TasksWithFilter(props) {
  // const selectedFilter = useSelector(currentFilter);
  // const [filterSelector, setFilter] = useState(selectedFilter);

  // const takeTitleFromSelector = (str) => {
  //   setFilter(str);
  // }

  // useEffect(() => {
  //   setItemToLocalStorage('filter', filterSelector);
  // });


  return (
    <div className={styles.container}>
      <div className={styles.select}>
        <p className={styles.title}>
          Filter of Tasks:
        </p>
        <Select
          choise={props.choise}
          // value={filterSelector}
          // onChange={takeTitleFromSelector}
        />
      </div>
      <TaskList />
    </div>
  )
}

export default TasksWithFilter;