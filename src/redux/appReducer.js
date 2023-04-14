const getToDoFromLocalStorage = () => {
  const arr = localStorage.getItem('todo');
  if(arr){
    return JSON.parse(arr);
  }
  return [];
}

const initialState = {
  toDoList: getToDoFromLocalStorage(),
};

export const appReducer = (state = initialState, action) => {

  switch(action.type){
    case 'ADDTASK':
      const newTask = {
        title: action.title,
        done: false,
        id: Date.now(),
      };
  
      return{
        ...state, 
        toDoList: [...state.toDoList, newTask],
      }

    case 'DELETETASK':
      return {
        ...state,
        toDoList: state.toDoList.filter((t) => t.id !== action.taskID)
      }
    
    case 'CHANGETASK':

    const arr = state.toDoList.map((item) => {
      if (item.id == action.taskID) {
        if (action.title) {
          item.title = action.title;
        }
        else {
          item.done = !item.done;
        }
      }

      return item;
    });

      return {
        ...state,
        toDoList: arr,
      }
      
    default: 
      return state;
  }
}