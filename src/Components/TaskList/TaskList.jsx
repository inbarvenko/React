import React from "react";
import Task from "../Task/Task";
import styles from './TaskList.module.css'

function TaskList({ onChange, remove, filteredToDo }) {

  return (
    <ul className={styles.container}>
      {filteredToDo.length
        ?
        filteredToDo.map((item) => {
          return <Task
            onChange={onChange}
            remove={remove}
            task={item}
            key={item.id} />
        })
        : <p className={styles.noTasks}>No tasks</p>
      }
      {filteredToDo.length
        ? <div className={styles.explanations}>
          <p>To edit task use doubleclick on chosen one.</p>
          <p>To save edit of task press Enter, to cancel push mouse somewhere else.</p>
        </div>
        : ''}
    </ul>
  );
}

export default TaskList;