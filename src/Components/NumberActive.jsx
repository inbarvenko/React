import React from "react";

function NumberActive ({showText, showNum}) {
  return (
    <div className="list__current">
      <h3 className="current_text">{showText}</h3>
      <h2 id="number" className="number">{showNum}</h2>
    </div>
  );
}

export default NumberActive;