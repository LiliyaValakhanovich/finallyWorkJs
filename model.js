class Model extends EventEmitter{
  constructor(todo=[]){
    super();
    this.todos=todo;
  }

  addTodo(todo){
    console.log('model', todo);
    this.todos.push(todo);
    return todo;
  }
}