class View extends EventEmitter{
  constructor(helpers){
    super();
    this.helpers=helpers;

    this.weather_current=document.querySelector('.weather_current');
    this.form=document.querySelector('.form');
    this.input=document.querySelector('.form-input');
    this.weather_list=document.querySelector('.weather_list');
    this.todo_list=document.querySelector('.todo_list_history');

    this.sendTitle=this.sendTitle.bind(this);

    this.form.addEventListener('submit', this.sendTitle);
  }

  show (todos){
    todos.forEach(todo=>{
      this.addTodo(todo);
    }) 
  }

  addTodo(todo){
    console.log('vew', todo);
    const element=this.createElement(todo);
    const liElement=this.createTodoList(todo);
    console.log(liElement);
    this.weather_current.append(element);
    this.todo_list.append(liElement);
    return todo;
  }

  addList(todo){
    console.log('viewList', todo);
    const liItem=this.createLiElement(todo);
    this.weather_list.append(liItem);
    return todo;
  }

  createElement(todo){
    const date=this.helpers.createDate(todo.date);
    const title=this.helpers.createTitle(todo.city);
    const country=this.helpers.createCountry(todo.country);
    const placeConteiner=this.helpers.createPlaceCountry([title, country]);
    const image=this.helpers.createImage(todo.img);
    const degrees=this.helpers.createDegrees(todo.temp);
    const imageConteiner=this.helpers.createImageConteiner([image, degrees]);
    const tempLike=this.helpers.createTemp(todo.tempLike);
    const descr=this.helpers.createDescr(todo.newDescr);
    const descrConteiner=this.helpers.createDescription([tempLike, descr]);
    const pressure=this.helpers.createPressure(todo.pressure);
    /*const wind=this.helpers.createWind(todo.wind);
    const speedOfWind=this.helpers.createSpeed(todo.speedOfWind);
    const humidity=this.helpers.createHumidity(todo.humidity);*/
    const paramConteiner=this.helpers.createParamConteiner([pressure])
    return this.helpers.createConteiner([date, placeConteiner, imageConteiner, descrConteiner, paramConteiner]);

  }

  createTodoList(todo){
    const date=this.helpers.createDate(todo.date);
    const title=this.helpers.createTitle(todo.city);
    const country=this.helpers.createCountry(todo.country);
    const placeConteiner=this.helpers.createPlaceCountry([title, country]);
    const image=this.helpers.createImage(todo.img);
    const degrees=this.helpers.createDegrees(todo.temp);
    const imageConteiner=this.helpers.createImageConteiner([image, degrees]);
    const descr=this.helpers.createDescr(todo.newDescr);
    return this.helpers.createTodoItem([date, placeConteiner, imageConteiner, descr]);
    
  }

  createLiElement(todo){
    const date=this.helpers.createLiDate(todo.date);
    const temp=this.helpers.createDegrees(todo.temp);
    const descr=this.helpers.createDescr(todo.newDescr);
    return this.helpers.createLi([date, temp, descr]);
  }

  sendTitle(event){
    event.preventDefault();
    const title=this.input.value;
    if (title.trim() === '') {
      alert('You need to enter valid todo title!');

      return;
    }
    
    this.emit('send', title);
  }
}