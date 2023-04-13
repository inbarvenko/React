import React from 'react';
import styles from './Button.module.css'

function Button({ onClick, title, option, disabled, preventDefault = true }) {
  const buttonAction = (event) => {
    if(preventDefault){
      event.preventDefault();
    }
    onClick(option);
  }

  let style = `${styles.button}`;
  if(disabled){
    style+=` ${styles.buttonHidden}`
  }
  
  return (
    <button
      className={style}
      onClick={buttonAction}>
      {title}
    </button>
  );
}

export default Button;