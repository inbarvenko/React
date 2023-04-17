import React, { useState, useRef } from 'react'
import Button from '../Button/Button';
import styles from './InputForm.module.css'

const InputForm = ({ blur = false, onClickInput, name, disabled = false, value = '' }) => {

  const [title, setTitle] = useState(value); 
  

  const saveTaskTitle = (event) => {
    event.preventDefault();

    onClickInput(title);

    setTitle('');
  };

  const changingTitle = (event) => {
    setTitle(event.target.value);
  };

  const downEnter = (event) => {
    if (event.code == 'Enter') {
      onClickInput(title);
      setTitle('');
    }
  };

  const ref = useRef(title);

  const returnValue = () => {
    if (blur) {
      ref.value = value;
      onClickInput();
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