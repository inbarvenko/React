import React from 'react';

function Buttons (props) {
  
  return (
    <div className = "item__buttons">
      <button className = "buttons__edit">Edit</button>
      <button className = "buttons__delete" onClick={(e) => {
        props.onClick(props.taskID)
      }}>X</button>
    </div>
  );
}

export default Buttons;