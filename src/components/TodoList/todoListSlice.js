import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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
  extraReducers: (builder) => {
    builder
      .addCase(fecthTodos.pending, (state, action) => {
        console.log("This is loading state");
      })
      .addCase(fecthTodos.fulfilled, (state, action) => {
        state = action.payload;
      })
      .addCase(fecthTodos.rejected, (state, action) => {
        console.log("This is error");
      })
      .addCase(addTodo2.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(updateStatus.fulfilled, (state, action) => {
        const id = action.payload;
        const todoCurrent = state.find((todo) => todo.id === id);
        todoCurrent.completed = !todoCurrent.completed;
      });
  },
});



export const fecthTodos = createAsyncThunk("/todos/fetchTodos", async () => {
  const res = await fetch("/api/todos");
  const data = await res.json();
  console.log(["This is Data"], data);
  console.log(data.todos);
  return data.todos;
});

export const addTodo2 = createAsyncThunk("/todos/addTodo2", async (newTodo) => {
  const res = await fetch("/api/todo", {
    method: "POST",
    body: JSON.stringify(newTodo),
  });
  const todo = await res.json();
  console.log(["Here is respond"], todo.todos);
  return todo.todos;
});

export const updateStatus = createAsyncThunk(
  "/todos/updateStatus",
  async (todoId) => {
    const res = fetch(`/api/todos/${todoId}`, {
      method: "PATCH",
    });
    return todoId;
  }
);

export default todoListSlice;
