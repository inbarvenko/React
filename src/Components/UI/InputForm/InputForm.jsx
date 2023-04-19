import React, { useState, useRef } from 'react';
import Button from '../Button/Button';
import styles from './InputForm.module.css'

const InputForm = (props) => {

  const [title, setTitle] = useState(props.taskTitle);

  const saveTaskTitle = (event) => {
    event.preventDefault();

    props.onClickSave(title);
    setTitle('');
  };

  const changingTitle = (event) => {
    setTitle(event.target.value);
  };

  const returnValue = () => {
    props.onClickSave('');
  }


  return (
    <form className={styles.inputForm}>
      <input
        className={
          `${styles.input} ${(props.buttonName == "Edit") ? styles.inputEdit : ''}`}
        autoFocus={true}
        type="text"
        value={title}
        onChange={changingTitle}
        onBlur={returnValue}
      ></input>
      <Button
        isButtonDisabled={props.isButtonDisabled}
        onClick={saveTaskTitle}
        title={props.buttonName}
      />
    </form>
  )
}

export default InputForm;