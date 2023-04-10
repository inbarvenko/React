import React from "react";

function NumberActive ({showText, showNum}) {
  return (
    <div>
      <h3>{showText}</h3>
      <h2 id="number">{showNum}</h2>
    </div>
  );
}

export default NumberActive;