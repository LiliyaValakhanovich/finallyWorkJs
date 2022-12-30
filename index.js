const todo=StorageHelper.getItem('todo');

const model=new Model(todo || []);
model.on('change', (todo)=>{StorageHelper.setItem('todo', todo)});

const view=new View(new DomHelper);
const controller=new Controller(model, view);
controller.init();






/*fetch('http://api.openweathermap.org/data/2.5/weather?q=Minsk&appid=870636f0f5cfc9e6ec4e9365513f649d')
  .then(res=>res.json())
  .then(console.log)*/
