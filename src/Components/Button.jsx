import React from 'react';

function Button ({onClick, title, option}) {
  return (
    <div className = "item__button">
      <button onClick={(e) => {
        e.preventDefault();
        onClick(option)}}>
          {title}
      </button>
    </div>
  );
}

export default Button;