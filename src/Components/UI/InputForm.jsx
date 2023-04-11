import React, {useState} from 'react'
import Button from './Button';
import styles from '../../styles/InputForm.module.css'

const InputForm = ({onClickInput, name, disabled, value}) => {
  const [title, setTitle] = useState(value);
  
  const makeTask = (title) => {
    onClickInput(title);

    setTitle('');
  };

  const changeTitle = (value) => {
    setTitle(value);
  };

  const downEnter = (event) => {
    if (event.code == 'Enter') {
      makeTask(event.target.value);
    }
  }
  
  return (
    <div className={styles.inputForm}>
      <input 
        className={styles.input}
        autoFocus={true}
        id="input_text"
        type="text"
        value = {title}
        onChange = {(e) => changeTitle(e.target.value)}
        onBlur = {(e) => makeTask(e.target.value)}
        onKeyDown = {(e) => downEnter(e)}
      ></input>
      <Button disabled={disabled} onClick={makeTask} title={name} option={title}/>
    </div>
  )
}

export default InputForm;