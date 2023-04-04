import React, {useState} from 'react'

const InputForm = ({onClickInput}) => {

  const [title, setTitle] = useState('');
  
  const addTask = (e) => {
    e.preventDefault();
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
      <button id="add_button" onClick={(e) => addTask(e)}>Add</button>
    </div>
  )
}

export default InputForm;