class Controller {
  constructor(model, view){
    this.model=model;
    this.view=view;

    this.view.on('add', this.addTodo.bind(this));
  }

  init(){
    this.view.show(this.model.todos);
  }

  addTodo(data){
    const todo=this.model.addTodo({
      city:data.name,
      image:data.weather.icon,
      temp:data.main.temp,
      main:data.weather.main,
      pressure:data.main.pressure,
      humidity:data.main.humidity,
    })
  }
}