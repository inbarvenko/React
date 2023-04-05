import React from 'react';

function Button ({onClick, title, taskID}) {
  return (
    <div className = "item__button">
      <button onClick={(e) => onClick(e, taskID)}>{title}</button>
    </div>
  );
}

export default Button;