import { createSlice } from '@reduxjs/toolkit';
import { getItemFromLocalStorage } from "../localStorage";


export const toDoList = createSlice({
  name: 'ToDoList',
  initialState: {
    filter: getItemFromLocalStorage('filter', 'all'),
    toDoList: getItemFromLocalStorage('todo', []),
  },
  reducers: {
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
    addTask: (state, action) => {
      const newTask = {
        title: action.payload,
        done: false,
        id: Date.now(),
      };

      state.toDoList.push(newTask);
    },
    removeTask: (state, action) => {
      state.toDoList = state.toDoList.filter((t) => t.id !== action.payload);
    },
    changeStatusTask: {
      reducer: (state, action) => {
        state.toDoList = state.toDoList.map((item) => {
          if (item.id == action.payload) {
            item.done = !item.done;
          }
          return item;
        });
      },
      prepare: (taskID) => ({ payload: taskID }),
    },
    changeTitleTask: {
      reducer: (state, action) => {
        state.toDoList = state.toDoList.map((item) => {
          if (item.id == action.payload.id) {
            item.title = action.payload.title;
          }
          return item;
        });
      },
      prepare: (taskID, title) => ({ payload: { id: taskID, title: title } }),
    }
  }
});

export default toDoList.reducer;
export const { changeFilter, addTask, removeTask, changeStatusTask, changeTitleTask } = toDoList.actions;
