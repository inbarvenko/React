import React, { useState } from 'react'
import Button from '../Button/Button';
import styles from './InputForm.module.css'

const InputForm = ({ onClickInput, name, disabled = false, value = '' }) => {
  
  const [title, setTitle] = useState(value);

  const saveTaskTitle = () => {
    onClickInput(title);

    setTitle('');
  };

  const changingTitle = (event) => {
    setTitle(event.target.value);
  };

  const downEnter = (event) => {
    if (event.code == 'Enter') {
      saveTaskTitle();
    }
  }
  

  return (
    <div className={styles.inputForm}>
      <input
        className={styles.input}
        autoFocus={true}
        id="input_text"
        type="text"
        value={title}
        onChange={changingTitle}
        onBlur={saveTaskTitle}
        onKeyDown={downEnter}
      ></input>
      <Button
        disabled={disabled}
        onClick={saveTaskTitle}
        title={name}
        option={title}
      />
    </div>
  )
}

export default InputForm;