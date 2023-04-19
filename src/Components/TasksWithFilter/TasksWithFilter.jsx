import React, { useState, useEffect } from 'react';
import styles from './TasksWithFilter.module.css'
import Select from "../UI/Select/Select";
import TaskList from "../TaskList/TaskList";
import { useSelector } from 'react-redux';
import { changeFilter } from '../../redux/toDoList';
import { useDispatch } from 'react-redux';
import { setItemToLocalStorage } from '../../localStorage';


function TasksWithFilter() {
  const selectedFilter = useSelector((state) => state.toDoList.filter);
  const dispatch = useDispatch();

  const takeTitleFromSelector = (str) => {
    dispatch(changeFilter(str));
  }

  useEffect(()=>{
    setItemToLocalStorage('filter', selectedFilter);
  }, [selectedFilter])


  return (
    <div className={styles.container}>
      <div className={styles.select}>
        <p className={styles.title}>
          Filter of Tasks:
        </p>
        <Select
          value={selectedFilter}
          onChange={takeTitleFromSelector}
        />
      </div>
      <TaskList />
    </div>
  )
}

export default TasksWithFilter;