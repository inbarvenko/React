import { combineReducers } from 'redux';
import {toDoList} from './toDoList'

export const rootReducer = combineReducers({
  toDoList: toDoList.reducer,
})