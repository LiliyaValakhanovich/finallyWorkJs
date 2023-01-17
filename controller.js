class Controller {
  constructor(model, view){
    this.model=model;
    this.view=view;

    this.view.on('send', this.addTitle.bind(this));
    this.view.on('delete', this.deleteItem.bind(this));
    this.model.on('add', this.addTodo.bind(this));
    this.model.on('addCurrent', this.addCurrentTodo.bind(this));
    this.model.on('addList', this.addList.bind(this));
  }

  init(){
    this.view.show(this.model.todos);
    this.view.showCurrent(this.model.curtodo);
    this.view.showForecast(this.model.listtodo);
  }

   async addTitle(title){
    console.log('controller', title);
   const res= await this.model.addTitle(
      title,
    )
  }

  async addTodo([now, city, country, img, temp, tempLike,  newDescr, wind, speedOfWind, humidity, pressure]){
    const todo= await this.view.addTodo({
      id:Date.now(),
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

  async addCurrentTodo([now, city, country, img, temp, tempLike,  newDescr, wind, speedOfWind, humidity, pressure]){
    const curtodo= await this.view.addCurrentTodo({
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

  async  addList(listArray){
    await this.view.addList({
      listArray,
    })
    this.model.addList(listArray);
  }

  deleteItem(id){
    this.model.deleteItem(id);
    this.view.deleteItem(id);  
  }
}