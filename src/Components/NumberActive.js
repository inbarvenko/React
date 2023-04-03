import React from "react";

const currentTasks = (list)  => {
  let active = 0;
  
  list.forEach((item) => {
    if(!item.done) active++;
  })

  return active;
}

function NumberActive (props) {
  return (
    <div class="list__current">
      <h3 class="current_text">How many tasks to do:</h3>
      <h2 id="number" class="number">{currentTasks(props.list)}</h2>
    </div>
  );
}

export default NumberActive;