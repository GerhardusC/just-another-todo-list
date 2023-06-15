//Setting up store and importing slice.
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './slices/todoList';

export const store = configureStore({
    reducer: {
        todos: todoReducer
    },
})