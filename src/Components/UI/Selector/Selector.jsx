import React from "react";
import styles from './Selector.module.css'

function Selector({ choise, onChange}) {
  console.log("Selector")

  return (
    <select
      className={styles.selector}
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

export default Selector;