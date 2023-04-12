import React from "react";
import styles from './Selector.module.css'

function Selector({ choise, onChange, value }) {
  return (
    <select
      className={styles.selector}
      value={value}
      onChange={(e) => onChange('filter', e.target.value)}
    >
      {choise.map((option) => {
        return <option
          key={option.value}
          value={option.value}
        >
          {option.name}
        </option>
      })}
    </select>
  );
}

export default Selector;