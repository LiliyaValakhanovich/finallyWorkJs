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

  show (todos){
    todos.forEach(todo=>{
      this.addTodo(todo);
    }) 
  }

  addTodo(todo){
    const element=this.createElement(todo);

    this.conteinerElement.append(element);
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

  searchWeather(event){
    event.preventDefault();
    const title=this.input.value;
    if (title.trim() === '') {
      alert('You need to enter valid todo title!');

      return;
    }
    console.log(title);

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${title}&appid=870636f0f5cfc9e6ec4e9365513f649d&units=metric`)
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      const date=new Date(Date.now());
      const city=data.name;
      const country=data.sys.country;
      const img=data.weather[0].icon;
      const temp=data.main.temp;
      const tempLike=data.main.feels_like;
      const descr=data.weather[0].description;
      const newDescr=descr[0].toUpperCase()+descr.slice(1);
      const wind=data.wind.deg;
      const speedOfWind=data.wind.speed;
      const humidity=data.main.humidity;
      const pressure=data.main.pressure;
      this.emit('add', [date, city, country, img, temp, tempLike,  newDescr, wind, speedOfWind, humidity, pressure]);
    })

  }
}