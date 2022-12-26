class Model extends EventEmitter{
  constructor(todo={}){
    super();
    this.todos=todo;
  }

  addTodo(todo){
    this.todos.push(todo);
    return todo;
  }
}