import React from 'react';

function Buttons (props) {
  
  return (
    <div className = "item__buttons">
      <button className = "buttons__edit">Edit</button>
      <button className = "buttons__delete" onClick={(e) => {
        props.remove_task(props.task)
      }}>X</button>
    </div>
  );
}

export default Buttons;