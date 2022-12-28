class Controller {
  constructor(model, view){
    this.model=model;
    this.view=view;

    this.view.on('add', this.addTodo.bind(this));
  }

  init(){
    this.view.show(this.model.todos);
  }

  addTodo([date, city, country, img, temp, tempLike, newDescr, wind, speedOfWind, humidity, pressure]){
    console.log('controller', city, country, temp, pressure);
    const todo=this.model.addTodo({
      date,
      city,
      country,
      img,
      temp,
      tempLike,
      newDescr,
      wind,
      speedOfWind,
      humidity,
      pressure,
    })
    
    this.view.addTodo(todo);
  }

  
}