import React, { useState } from "react";

const addArr = () => {
  setToDoList([...todoList, todoList]);
};

function ContainerInput () {

  const [todo, setToDo] = useState('');
  const [todoList, setToDoList] = useState('');

  return (
    <div class="container__input">
      <input 
        id="input_text"
        type="text"
        class="input__text"
        value = {todo}
        onChange = {setToDo(e.target.value)}
        ></input>
      <button id="add_button" onClick={addArr}>Add</button>
    </div>
  );
}

export default ContainerInput;