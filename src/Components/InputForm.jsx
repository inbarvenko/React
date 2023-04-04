import React, {useState} from 'react'

const InputForm = ({onClick}) => {

  const [title, setTitle] = useState('');
  
  const addTask = (e) => {
    e.preventDefault();
    onClick(title);

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
      <button id="add_button" onClick={(e) => addTask(e)}>Add</button>
    </div>
  )
}

export default InputForm;