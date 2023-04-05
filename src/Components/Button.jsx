import React from 'react';

function Button ({onClick, title, taskID}) {
  return (
    <div className = "item__button">
      <button onClick={(e) => {
        e.preventDefault();
        onClick(taskID)}}>
          {title}
      </button>
    </div>
  );
}

export default Button;