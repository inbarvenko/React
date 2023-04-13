import { createSelector } from '@reduxjs/toolkit';

export const selectedFilter = (state, props) => 'all';
export const currentToDoList = state => state.appReducer.toDoList;

export const filteredList = createSelector(
  [selectedFilter, currentToDoList],
  (filter, list) => {
    switch (filter) {
      case 'active':
        return list.filter((task) => !task.done);
      case 'completed':
        return list.filter((task) => task.done);
      default:
        return list;
    }
  }
);