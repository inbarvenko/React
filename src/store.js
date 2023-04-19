import { rootReducer } from './redux/rootReducer';
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({reducer: rootReducer});