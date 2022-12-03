import { createSelector } from "reselect";

export const todoListSelector = (state) => state.todoList;

export const filterSearchSelector = (state) => state.filters.search;

export const filterStatusSelector = (state) => state.filters.status;

export const todosRemainSelector = createSelector(
  todoListSelector,
  filterSearchSelector,
  filterStatusSelector,
  (todoList, searchText, statusText) => {
    if (statusText === "All") {
      return todoList.filter((todo) => todo.name.includes(searchText));
    }

    if (statusText === "Completed") {
      return todoList.filter(
        (todo) => todo.name.includes(searchText) && todo.completed === true
      );
    }
    if (statusText === "Todo") {
      return todoList.filter(
        (todo) => todo.name.includes(searchText) && todo.completed === false
      );
    }
  }
);
