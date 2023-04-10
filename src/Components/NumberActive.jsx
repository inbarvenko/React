import React from "react";
import styles from '../styles/NumberActive.module.css'

function NumberActive ({showText, showNum}) {
  return (
    <div className={styles.title}>
      <h3 className={styles.title__name}>{showText}</h3>
      <h2 className={styles.title__number}>{showNum}</h2>
    </div>
  );
}

export default NumberActive;