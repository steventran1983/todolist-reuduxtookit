import { createServer, Model } from "miragejs";

const fakeApi = createServer({
  models: {
    todos: Model,
  },

  routes() {
    this.get("/api/todos", (schema) => {
      return schema.todos.all();
    });
    this.post("/api/todo", (schema, request) => {
      let newTodo = JSON.parse(request.requestBody);
      return schema.todos.create(newTodo);
    });
  },
});

export default fakeApi;
