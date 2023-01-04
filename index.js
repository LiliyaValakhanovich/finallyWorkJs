const todos=StorageHelper.getItem('todos');
const curtodo=StorageHelper.getItem('key');
const model=new Model(todos ||[], curtodo || []);
console.log(curtodo);
model.on('change', (todos)=>StorageHelper.setItem('todos', todos));
model.on('change_current', (curtodo)=>StorageHelper.setItem('key', curtodo));
const view=new View(new DomHelper);
const controller=new Controller(model, view);
controller.init();