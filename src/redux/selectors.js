import { createSelector } from "reselect";

export const todoListSelector = (state) => state.todoList;

export const filterSearchSelector = (state) => state.filters.search;

export const filterStatusSelector = (state) => state.filters.status;
export const filterPrioritySelector = (state) => state.filters.priority;

export const todosRemainSelector = createSelector(
  todoListSelector,
  filterSearchSelector,
  filterStatusSelector,
  filterPrioritySelector,
  (todoList, searchText, statusText, priorities) => {
    if (statusText === "All") {
      return todoList.filter((todo) =>
        priorities.length
          ? todo.name.includes(searchText) && priorities.includes(todo.priority)
          : todo.name.includes(searchText)
      );
    }

    if (statusText === "Completed") {
      return todoList.filter((todo) =>
        priorities.length
          ? todo.name.includes(searchText) &&
            todo.completed === true &&
            priorities.includes(todo.priority)
          : todo.name.includes(searchText) && todo.completed
      );
    }
    if (statusText === "Todo") {
      return todoList.filter((todo) =>
        priorities.length
          ? todo.name.includes(searchText) &&
            todo.completed === false &&
            priorities.includes(todo.priority)
          : todo.name.includes(searchText) && todo.completed === false
      );
    }
  }
);
