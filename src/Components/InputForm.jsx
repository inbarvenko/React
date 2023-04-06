import React, {useState} from 'react'
import Button from './Button';

const InputForm = ({onClickInput, name}) => {

  const [title, setTitle] = useState('');
  
  const makeTask = (title) => {
    onClickInput(title);

    setTitle('');
  };

  return (
    <div>
      <input 
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