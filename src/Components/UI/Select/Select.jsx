import React from "react";
import styles from './Select.module.css'
import { FILTER_OPTIONS } from "../../../constants";

function Select(props) {

  return (
    <select
      className={styles.selector}
      value={props.value}
      onChange={(e) => props.onChange(e.target.value)}
    >
      {FILTER_OPTIONS.map((option) => {
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