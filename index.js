const runApp = async () => {
  const todos=StorageHelper.getItem('todos');
  const curtodo=StorageHelper.getItem('key');
  const listArray=StorageHelper.getItem('list');
  const model=new Model(todos ||[], curtodo || [], listArray || []);
  model.on('change', (todos)=>StorageHelper.setItem('todos', todos));
  model.on('change_current', (curtodo)=>StorageHelper.setItem('key', curtodo));
  model.on('change_list', (listArray)=>StorageHelper.setItem('list', listArray));
  const view=new View(new DomHelper);
  const controller=new Controller(model, view);
  controller.init();
};

runApp();  