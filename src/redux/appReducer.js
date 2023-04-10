const initialState = {
  toDoList: []
};

export const appReducer = (state = initialState, action) => {

  switch(action.type){
    case 'ADDTASK':
      const newTask = {
        title: action.title,
        done: false,
        edit: false,
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

      const resArr = state.toDoList.map((t) => {
        t.done = (t.id == action.taskID) ? (!t.done) : (t.done)
        return t;
      })

      return {
        ...state,
        toDoList: resArr,
      }
      
    default: 
      return state;
  }
}