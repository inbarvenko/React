import { combineReducers } from 'redux';
import { appReducer } from './appReducer';
import {filteredToDoList} from './slicers'

export const rootReducer = combineReducers({
  toDoList: appReducer,
  filter: filteredToDoList,
})