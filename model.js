class Model extends EventEmitter{
  constructor(todos=[], curtodo=[], listtodo=[]){
    super();
    this.todos=todos;
    this.curtodo=curtodo;
    this.listtodo=listtodo;
  }

  async addTitle(title){
    console.log('model',  title);

    let res=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${title}&appid=&units=metric`)
    res=>res.json();
    res.then(data=>{
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

    let response=await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${title}&cnt=10&appid=&units=metric`)
    response=>response.json();
    response.then(data=>{
      console.log(data);
      const listArray=data.list;
      console.log(listArray);
     
      this.emit('addList', listArray);
      
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
      this.curtodo+=curtodo;
      this.emit('change_current', curtodo);
    } else{
      this.curtodo.length=0;
      this.curtodo+=curtodo;
      console.log(this.curtodo);
      this.emit('change_current', curtodo);
    }

    
    return curtodo;
  }

  addList(listtodo){
    
   this.listtodo+=listtodo;
    return listtodo;
  }
}