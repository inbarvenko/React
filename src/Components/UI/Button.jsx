import React from 'react';

function Button ({onClick, title, option}) {
  return (
    <div>
      <button onClick={(e) => {
        e.preventDefault();
        onClick(option)}}>
          {title}
      </button>
    </div>
  );
}

export default Button;