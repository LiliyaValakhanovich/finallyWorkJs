class Model extends EventEmitter{
  constructor(todos=[], curtodo=[]){
    super();
    this.todos=todos;
    this.curtodo=curtodo;
  }

  addTitle(title){
    console.log('model',  title);

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${title}&appid=&units=metric`)
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      const date=new Date;
      const now=date.toLocaleString();
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
      this.emit('add', [now, city, country, img, temp, tempLike,  newDescr, wind, speedOfWind, humidity, pressure]);
      this.emit('addCurrent',[now, city, country, img, temp, tempLike,  newDescr, wind, speedOfWind, humidity, pressure]);
    })

    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${title}&cnt=2&appid=&units=metric`)
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      const listArray=data.list;
      console.log(listArray);
      listArray.forEach(el=>{
        const date=el.dt_txt;
        const temp=el.main.temp;
        console.log(temp);
        const descr=el.weather;
        console.log(descr);
        this.emit('addList', [date, temp, descr]);
      })
    })   
  }

  addTodo(todo){
   if(this.todos.length<10){
      this.todos.push(todo);
    } else if(this.todos.length>=10){
      this.todos.shift();
      this.todos.push(todo);
      console.log(this.todos);
    }

    this.emit('change', this.todos);
    return this.todos;
  }

  addCurrentTodo(curtodo){
    console.log(curtodo);
    console.log(this.curtodo);
    
    if (this.curtodo.length===0){
      this.curtodo.push(curtodo);
    } else{
      this.curtodo.length=0;
      curtodo.push(curtodo);
      this.emit('change_current', curtodo);
    }
    return curtodo;
  }

  addList(curtodo){
    curtodo.push(curtodo);
    return curtodo;
  }
}