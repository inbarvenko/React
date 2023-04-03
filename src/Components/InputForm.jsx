import React, {useState} from 'react'

const InputForm = ({new_task}) => {

  const [title, setTitle] = useState('');
  const [toDoList, setToDoList] = useState([]);

  const addTask = (e) => {
    e.preventDefault();
    
    const newTask = {
      title,
      done: false,
      edit: false,
      id: Date.now(),
    };
    
    new_task(newTask);

    setToDoList([...toDoList, newTask]);
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
      <button id="add_button" onClick={addTask}>Add</button>
    </div>
  )
}

export default InputForm;