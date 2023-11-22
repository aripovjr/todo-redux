import { createSlice } from "@reduxjs/toolkit";

export const TodoSlice = createSlice({
  name: "todo",
  initialState: {
    todoList: [],
  },
  reducers: {
    addTodoItem: (state, action) => {
      const newTodo = {
        id: Date.now(),
        value: action.payload,
      };
      state.todoList.push(newTodo);
    },

    removeTodoItem: (state, action) => {
      state.todoList = state.todoList.filter(
        (task) => task.id !== action.payload
      );
    },
  },
});

export const { addTodoItem, removeTodoItem } = TodoSlice.actions;
export default TodoSlice.reducer;
