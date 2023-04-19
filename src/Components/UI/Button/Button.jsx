import React from 'react';
import styles from './Button.module.css'

function Button({ onClick, title, isButtonDisabled=false }) {
  
  return (
    <button
      className={`${styles.button} ${isButtonDisabled ? styles.buttonHidden : ''}`}
      onClick={onClick}>
      {title}
    </button>
  );
}

export default Button;