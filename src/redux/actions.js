export function addTask(title){
  return {
    type: 'ADDTASK',
    title,
  }
}

export function deleteTask(taskID){
  return {
    type: 'DELETETASK',
    taskID,
  }
}

export function changeTask(taskID){
  return {
    type: 'CHANGETASK',
    taskID,
  }
}

