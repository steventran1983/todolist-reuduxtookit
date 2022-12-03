export const createAddTodo = (data) => {
  return {
    type: "todoList/addTodo",
    payload: data,
  };
};

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