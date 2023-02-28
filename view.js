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
    this.delete=this.delete.bind(this);
    this.deleteItem=this.deleteItem.bind(this);
    this.showWeather=this.showWeather.bind(this);

    this.form.addEventListener('submit', this.sendTitle);
    
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
      curtodo.lengths=[];
      this.addCurrentTodo(curtodo);
    }
  }

  addCurrentTodo(curtodo){
    
    const currentEl=this.createElement(curtodo);
    console.log(currentEl);
    this.weather_current.replaceChildren (currentEl);
    return curtodo;
  }

  addTodo(todo){
    const liElement=this.createTodoList(todo);
    this.todo_list.append(liElement);
    return todo;
  }

  addList(listArray){
    listArray.forEach(el=>{
      el.dt_txt=el.dt_txt.split(' ');
      console.log(el.dt_txt); 
      console.log(el);
      if(el.dt % 86400===0){
        const liItem=this.createLiElement(el);
        console.log(liItem);
        this.weather_list.append(liItem);
      } return 
    })
  }

  createElement(curtodo){
    console.log(curtodo);
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
    console.log(todo.id);
    const date=this.helpers.createDate(todo.now);
    const title=this.helpers.createTitle(todo.city);
    const country=this.helpers.createCountry(todo.country);
    const placeConteiner=this.helpers.createPlaceCountry([title, country]);
    const image=this.helpers.createImage(todo.img);
    const degrees=this.helpers.createDegrees(todo.temp);
    const imageConteiner=this.helpers.createImageConteiner([image, degrees]);
    const descr=this.helpers.createDescr(todo.newDescr);
    const buttonShow=this.helpers.createButtonShow([{event: 'click', handler: this.showWeather}]);
    const button=this.helpers.createButton([{event: 'click', handler: this.delete}]);
    return this.helpers.createTodoItem([{prop: 'data-id', value: todo.id}],[date, placeConteiner, imageConteiner, descr, buttonShow, button]); 
  }

  createLiElement(el){
    const date=this.helpers.createLiDate(el.dt_txt[0]);
    const image=this.helpers.createImage(el.weather[0].icon);
    const temp=this.helpers.createLitemp(el.main.temp);
    return this.helpers.createLi([date, image, temp]);
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

  showWeather(event){
    console.log(event.target);
    const targetEl=event.target.closest('.todo_item');
    const elTitle=targetEl.querySelector('.city');
    const title=elTitle.textContent;
    this.emit('send', title);
  }

  delete(event){
    const item=event.target.closest('.todo_item');
    console.log(item); 
    const id=+item.dataset.id;
    this.emit('delete', id);
  }

  deleteItem(id){
    const item=this.todo_list.querySelector(`[data-id="${id}"]`);
    console.log(item);
    item.remove();
  }
}