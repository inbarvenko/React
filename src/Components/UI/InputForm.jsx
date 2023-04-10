import React, {useState} from 'react'
import Button from './Button';
import styles from '../../styles/InputForm.module.css'

const InputForm = ({onClickInput, name}) => {

  const [title, setTitle] = useState('');
  
  const makeTask = (title) => {
    onClickInput(title);

    setTitle('');
  };

  return (
    <div className={styles.inputForm}>
      <input 
        className={styles.input}
        id="input_text"
        type="text"
        value = {title}
        onChange = {(e) => setTitle(e.target.value)}
      ></input>
      <Button onClick={makeTask} title={name} option={title}/>
    </div>
  )
}

export default InputForm;