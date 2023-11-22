import { configureStore } from "@reduxjs/toolkit";
import TodoListReducer from "./TodoSlice";

export const store = configureStore({
  reducer: {
    todo: TodoListReducer,
  },
});
