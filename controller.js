class Controller {
  constructor(model, view){
    this.model=model;
    this.view=view;

    this.view.on('send', this.addTitle.bind(this));
    this.model.on('add', this.addTodo.bind(this));
    this.model.on('addList', this.addList.bind(this));
  }

  init(){
    this.view.show(this.model.todos);
  }

  addTitle(title){
    console.log('controller', title);
    this.model.addTitle(
      title,
    )
  }

  addTodo([date, city, country, img, temp, tempLike,  newDescr, wind, speedOfWind, humidity, pressure]){
    const todo=this.view.addTodo({
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
     this.model.addTodo(todo);
  }

  addList([date, temp, newDescr]){
    const todo=this.view.addList({
      date,
      temp,
      newDescr,
    })
    this.model.addList(todo);
  }

  
}