class View extends EventEmitter{
  constructor(helpers){
    super();
    this.helpers=helpers;

    this.conteinerElement=document.querySelector('.conteinerElement');
    this.form=document.querySelector('.form');
    this.input=document.querySelector('.form-input');

    this.searchWeather=this.searchWeather.bind(this);

    this.form.addEventListener('submit', this.searchWeather);
  }

  show (todo){
    
    this.addTodo(todo);
    
  }

  addTodo(todo){
    const element=this.createElement(todo);

    this.conteinerElement.append(element);
  }

  createElement(todo){
    const title=this.helpers.createTitle(todo.name);
    const image=this.helpers.createImage();
    const degrees=this.helpers.createDegrees();
    const imageConteiner=this.helpers.createImageConteiner([image, degrees]);
    const description=this.helpers.createDescription();
    return this.helpers.createConteiner([title, imageConteiner, description]);

  }

  searchWeather(event){
    event.preventDefault();
    const title=this.input.value;
    console.log(title);

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${title}&appid=870636f0f5cfc9e6ec4e9365513f649d`)
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      this.emit('add', data);

    })
  }
}