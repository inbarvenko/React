import React from "react";
import styles from './Select.module.css'

function Select({ choise, onChange, value }) {

  return (
    <select
      className={styles.selector}
      value={value}
      onChange={(e) => onChange(e.target.value)}
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

export default Select;