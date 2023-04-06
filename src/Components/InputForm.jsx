import React, {useState} from 'react'
import Button from './Button';

const InputForm = ({onClickInput}) => {

  const [title, setTitle] = useState('');
  
  const makeTask = (title) => {
    onClickInput(title);

    setTitle('');
  };

  return (
    <div className="container__input">
      <input 
        id="input_text"
        type="text"
        className="input__text"
        value = {title}
        onChange = {(e) => setTitle(e.target.value)}
      ></input>
      <Button onClick={makeTask} title="Add" option={title}/>
    </div>
  )
}

export default InputForm;