import React from "react";
import Task from "../Task/Task";
import styles from './TaskList.module.css';
import { useSelector } from "react-redux";
import { filteredList } from "../../redux/selectors";

function TaskList({ remove }) {

  const filteredToDos = useSelector(filteredList);

  return (
    <ul className={styles.container}>
      {filteredToDos.map((item) => {
        return <Task
          remove={remove}
          task={item}
          key={item.id} />
      })}
    </ul>
  );
}

export default TaskList;