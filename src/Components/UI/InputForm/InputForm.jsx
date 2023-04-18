import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../Button/Button';
import styles from './InputForm.module.css'
import { addTask } from '../../../redux/toDoList';

const InputForm = ({ blur = false, name, disabled = false, value = '' }) => {

  const [title, setTitle] = useState(value);
  const dispatch = useDispatch();

  const newTask = (title) => {
    if (!title.trim()) return;

    dispatch(addTask(title));
  };

  const saveTaskTitle = (event) => {
    event.preventDefault();

    newTask(title);

    setTitle('');
  };

  const changingTitle = (event) => {
    setTitle(event.target.value);
  };

  const downEnter = (event) => {
    if (event.code == 'Enter') {
      newTask(title);
      setTitle('');
    }
  };

  const ref = useRef(title);

  const returnValue = () => {
    if (blur) {
      ref.value = value;
      newTask();
      setTitle(value);
    }
  }


  return (
    <div className={styles.inputForm}>
      <input
        className={
          `${styles.input} ${(name == "Edit") ? styles.inputEdit : ''}`}
        autoFocus={true}
        type="text"
        value={title}
        onChange={changingTitle}
        onBlur={returnValue}
        onKeyDown={downEnter}
        ref={ref}
      ></input>
      <Button
        disabled={disabled}
        onClick={saveTaskTitle}
        title={name}
      />
    </div>
  )
}

export default InputForm;