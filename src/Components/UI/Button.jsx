import React from 'react';
import styles from '../../styles/Button.module.css'

function Button ({onClick, title, option, disabled}) {
  return (
    <div hidden={disabled ? true : false}>
      <button className={styles.button} onClick={(e) => {
        e.preventDefault();
        onClick(option)}}>
          {title}
      </button>
    </div>
  );
}

export default Button;