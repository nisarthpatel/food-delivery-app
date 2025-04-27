import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../projects/fetch-redux/todo';

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
