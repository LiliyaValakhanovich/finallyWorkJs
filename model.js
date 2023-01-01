class Model extends EventEmitter{
  constructor(todos={}){
    super();
    this.todos=todos ;
  }

  addTitle(title){
    console.log('model',  title);

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${title}&appid=870636f0f5cfc9e6ec4e9365513f649d&units=metric`)
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

     
    })

    /*fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${title}&appid=870636f0f5cfc9e6ec4e9365513f649d&units=metric`)
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      const listArray=data.list;
      console.log(listArray);
      listArray.forEach(el=>console.log(el.main.temp ));
      const date=listArray.dt_txt;
      const temp=listArray.main.temp;
      const descr=listArray.weather.description;
      const newDescr=descr[0].toUpperCase()+descr.slice(1);
      this.emit('addList', [date, temp, newDescr]);
    })
    */
      
    
  }

  addTodo(todo){
    if(this.todos.length<10){
      this.todos.push(todo);
    } else if(this.todos.length>=10){
      this.todos.shift();
      this.todos.push(todo);
      console.log(this.todos);
    }
    /*this.todos.push(todo);*/

   this.emit('change', this.todos);

    return todo;
  }

  addList(todo){
    console.log('modlist', todo);
    this.todos.push(todo);
    
    
    
    return todo;
  }
}