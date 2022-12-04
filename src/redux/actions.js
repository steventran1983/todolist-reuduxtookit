export const createAddTodo = (data) => {
  return {
    type: "todoList/addTodo",
    payload: data,
  };
};


export const createTodoToggle = (todoId) => {
  return {
    type: "todoList/toggleChange",
    payload:todoId
  }
}


export const createFilterText = (text) => {
  return {
    type: "filter/search",
    payload: text
  }
}


export const createFilterStatus = (text) => {
  return {
    type: "filter/status",
    payload:text
  }
}

export const createFilterPriority = (priorities) => {
  return {
    type: "filter/priorities",
    payload: priorities,
  };
}