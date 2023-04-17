import { createSlice } from '@reduxjs/toolkit';

import { getItemFromLocalStorage } from "../localStorage";


const filteredToDoList = createSlice({
  name: 'filteredToDoList',
  initialState: {
    toDoList: getItemFromLocalStorage('todo', [])
  },
  reducers: {
    active: (state) => {
       state.toDoList.filter((item) => !item.done);
    },
    completed: (state) => {
       state.toDoList.filter((item) => item.done);
    },
    // all: (state) =>
    //  { state.toDoList.filter}
  },
});

export default filteredToDoList.reducer;
export const {active, completed, all} = filteredToDoList.actions;
