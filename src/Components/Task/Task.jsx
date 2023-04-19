import React, { useState } from "react";
import Button from "../UI/Button/Button";
import InputForm from "../UI/InputForm/InputForm";
import styles from './Task.module.css';
import { useDispatch } from "react-redux";
import { changeTitleTask, changeStatusTask, removeTask } from "../../redux/toDoList";

function Task(props) {
  const [edit, setEdit] = useState(false);

  const dispatch = useDispatch();

  const editTask = () => {
    setEdit(!edit);
  }

  const changeTitle = (title) => {
    if(title) {
      dispatch(changeTitleTask({id: props.task.id, title}));
    }
    editTask();
  }

  const doneTask = () => {
    dispatch(changeStatusTask(props.task.id));
  }

  const onButtonClick = (event) => {
    event.preventDefault();
    dispatch(removeTask(props.task.id));
  }

  return (
    <li className={styles.task}>
      <input
        className={styles.input}
        type="checkbox"
        checked={props.task.done}
        onChange={doneTask} />

      {edit
        ? <InputForm
          taskTitle={props.task.title}
          onClickSave={changeTitle}
          isButtonDisabled={true}
          buttonName="Edit"
        />
        : <>
          <p 
            className={`${styles.text} ${props.task.done ? styles.text__done : ''}`}
            onDoubleClick={editTask}
          >
            {props.task.title}
          </p>
        </>}
      <Button
        onClick={onButtonClick}
        title="Delete"
      />
    </li>
  )
}

export default Task;