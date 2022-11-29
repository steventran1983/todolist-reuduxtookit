export const createAddTodo = (data) => {
  return {
    type: "todoList/addTodo",
    payload: data,
  };
};
