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
    this.showCurrentWeather=this.showCurrentWeather.bind(this);

    this.form.addEventListener('submit', this.sendTitle);
    this.todo_list.addEventListener('click', this.showCurrentWeather);
  }

  show (todos){
    if(todos.length<10){
      todos.forEach(todo=>{
      this.addTodo(todo); 
      })
    } else if(todos.length>=10){
      todos.shift();
      todos.forEach(todo=>{
        this.addTodo(todo);
      })
    }  
  }

  showCurrent(curtodo){
    if(curtodo.length===0){
      this.addCurrentTodo(curtodo);
    } else{
     
    
      this.addCurrentTodo(curtodo);
      console.log(curtodo);
    }
  }

  addCurrentTodo(curtodo){
    const currentEl=this.createElement(curtodo);
    this.weather_current.append(currentEl);
    return curtodo;
  }

  addTodo(todo){
    console.log('vew', todo);
   
    const liElement=this.createTodoList(todo);
    console.log(liElement);
    this.todo_list.append(liElement);
    return todo;
  }

  addList(curtodo){
    console.log('viewList', curtodo);
    const liItem=this.createLiElement(curtodo);
    this.weather_list.append(liItem);
    return curtodo;
  }

  createElement(curtodo){
    const date=this.helpers.createDate(curtodo.now);
    const title=this.helpers.createTitle(curtodo.city);
    const country=this.helpers.createCountry(curtodo.country);
    const placeConteiner=this.helpers.createPlaceCountry([title, country]);
    const divtitle=this.helpers.createDivTitle([date,placeConteiner]);

    const image=this.helpers.createImage(curtodo.img);
    const degrees=this.helpers.createDegrees(curtodo.temp);
    const imageConteiner=this.helpers.createImageConteiner([image, degrees]);

    const tempLike=this.helpers.createTemp(curtodo.tempLike);
    const descr=this.helpers.createDescr(curtodo.newDescr);
    const descrConteiner=this.helpers.createDescription([tempLike, descr]);

    const lipressure=this.helpers.createPressure(curtodo.pressure);
    const wind=this.helpers.createWind(curtodo.wind);
    const speedOfWind=this.helpers.createSpeed(curtodo.speedOfWind);
    const lidivWind=this.helpers.createDivWind([speedOfWind,wind]);

    const lihumidity=this.helpers.createHumidity(curtodo.humidity);

    const ulDescr=this.helpers.createUlDescr([lipressure, lihumidity, lidivWind]);

    const divDescr=this.helpers.createDivDescr([imageConteiner, descrConteiner, ulDescr]);
    return this.helpers.createConteiner([divtitle, divDescr]);

  }

  createTodoList(todo){
    const date=this.helpers.createDate(todo.now);
    const title=this.helpers.createTitle(todo.city);
    const country=this.helpers.createCountry(todo.country);
    const placeConteiner=this.helpers.createPlaceCountry([title, country]);
    const image=this.helpers.createImage(todo.img);
    const degrees=this.helpers.createDegrees(todo.temp);
    const imageConteiner=this.helpers.createImageConteiner([image, degrees]);
    const descr=this.helpers.createDescr(todo.newDescr);
    return this.helpers.createTodoItem([date, placeConteiner, imageConteiner, descr]); 
  }

  createLiElement(curtodo){
    const date=this.helpers.createLiDate(curtodo.date);
    const temp=this.helpers.createDegrees(curtodo.temp);
    const descr=this.helpers.createDescr(curtodo.descr);
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
    this.input.value='';
  }

  showCurrentWeather(event){
    console.log(event.target);
    const targetEl=event.target.closest('.todo_item');
    const elTitle=targetEl.querySelector('.city');
    const title=elTitle.textContent;

    this.emit('send', title);
  }
}