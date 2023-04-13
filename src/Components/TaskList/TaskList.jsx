import React, { useMemo } from "react";
import Task from "../Task/Task";
import styles from './TaskList.module.css'

function TaskList({ onChange, remove, info, filterSelector }) {

  const filteredList = useMemo(() => {
    switch (filterSelector) {
      case 'active':
        return info.filter((task) => !task.done);
      case 'completed':
        return info.filter((task) => task.done);
      default:
        return info;
    }
  }, [info, filterSelector]);

  return (
    <ul className={styles.container}>
      {filteredList.map((item) => {
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