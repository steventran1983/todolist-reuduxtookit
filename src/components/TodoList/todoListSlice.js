import { createSlice } from "@reduxjs/toolkit";

const todoListSlice = createSlice({
  name: "todoList",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    toggleChange: (state, action) => {
      const todoCurrent = state.find((todo) => todo.id === action.payload);
      todoCurrent.completed = !todoCurrent.completed;
    },
  },
});

export default todoListSlice;
