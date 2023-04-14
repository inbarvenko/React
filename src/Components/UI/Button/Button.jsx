import React from 'react';
import styles from './Button.module.css'

function Button({ onClick, title, disabled }) {
  return (
    <button
      className={`${styles.button} ${disabled ? styles.buttonHidden : ''}`}
      onClick={onClick}>
      {title}
    </button>
  );
}

export default Button;