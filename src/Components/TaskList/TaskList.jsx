import React from "react";
import Task from "../Task/Task";
import styles from './TaskList.module.css'

function TaskList({ onChange, remove, info }) {

  return (
    <ul className={styles.container}>
      {info.map((item) => {
        return <Task
          onChange={onChange}
          remove={remove}
          task={item}
          key={item.id} />
      })}
    </ul>
  );
}

export default TaskList;