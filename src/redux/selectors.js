import { createSelector } from "reselect";

export const currentToDoList = state => state.toDoList.toDoList;

export const currentFilter = state => state.toDoList.filter;


export const filteredToDoList = createSelector(
  [currentToDoList, currentFilter],
  (todo, filter) => {
    switch (filter) {
      case 'active':
        return todo.filter((item) => !item.done);
      case 'completed':
        return todo.filter((item) => item.done);
      default:
        return todo;
    }
  }
)