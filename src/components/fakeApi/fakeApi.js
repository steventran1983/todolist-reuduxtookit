import { createServer, Model } from "miragejs";

const fakeApi = createServer({
  models: {
    todos: Model,
  },

  routes() {
    this.get("/api/todos", (schema) => {
      console.log(schema.todos.all());
      return schema.todos.all();
    });
    this.post("/api/todo", (schema, request) => {
      let newTodo = JSON.parse(request.requestBody);
      return schema.todos.create(newTodo);
    });
    this.patch("/api/todos/:id", (schema, request) => {
      let id = request.params.id;

      // let attrs = this.normalizedRequestAttrs();
      // console.log(attrs)
      const curerntTodo = schema.todos.find(id);
      curerntTodo.update({completed: !curerntTodo.completed})
      console.log(curerntTodo)
      return curerntTodo
      // curerntTodo.update();
      // return schema.todos.find(id).update(attrs);
    });
  },
});

export default fakeApi;
