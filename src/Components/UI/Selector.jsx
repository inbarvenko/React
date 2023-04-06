import React from "react";

function Selector ({choise, onChange, value}) {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      {choise.map((option) => {
        return <option key={option.value} value={option.value}>{option.name}</option>
      })}
    </select>
  );
}

export default Selector;