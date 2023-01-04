class Controller {
  constructor(model, view){
    this.model=model;
    this.view=view;

    this.view.on('send', this.addTitle.bind(this));
    this.model.on('add', this.addTodo.bind(this));
    this.model.on('addCurrent', this.addCurrentTodo.bind(this));
    this.model.on('addList', this.addList.bind(this));
  }

  init(){
    this.view.show(this.model.todos);
    this.view.showCurrent(this.model.curtodo);
    this.view.showForecast(this.model.listtodo);
  }

  addTitle(title){
    console.log('controller', title);
    this.model.addTitle(
      title,
    )
  }

  addTodo([now, city, country, img, temp, tempLike,  newDescr, wind, speedOfWind, humidity, pressure]){
    const todo=this.view.addTodo({
      now,
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
     this.model.addTodo(todo);
  }

  addCurrentTodo([now, city, country, img, temp, tempLike,  newDescr, wind, speedOfWind, humidity, pressure]){
    const curtodo=this.view.addCurrentTodo({
      now,
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
    this.model.addCurrentTodo(curtodo);
  }

  addList(listArray){
    const listtodo=this.view.addList({
      listArray,
    })
    this.model.addList(listtodo);
  }
}