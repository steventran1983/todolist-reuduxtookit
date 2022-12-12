import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filter",
  initialState: {
    search: "",
    status: "All",
    priority: [],
  },
  reducers: {
    search: (state, action) => {
      state.search = action.payload;
    },
    status: (state, action) => {
      state.status = action.payload;
    },
    priorities: (state, action) => {
      state.priority = action.payload;
    },
  },
});

export default filtersSlice;
