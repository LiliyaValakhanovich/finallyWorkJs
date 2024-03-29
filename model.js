class Model extends EventEmitter{
  constructor(todos=[], curtodo=[], listArray=[]){
    super();
    this.todos=todos;
    this.curtodo=curtodo;
    this.listArray=listArray;
  }

    async addTitle(title){
    let res=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${title}&appid=870636f0f5cfc9e6ec4e9365513f649d&units=metric`)
    res=res.json();
    res.then(data=>{
      const date=new Date();
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

    let response=await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${title}&appid=870636f0f5cfc9e6ec4e9365513f649d&units=metric`)
    response=response.json();
    response.then(data=>{
      const listArray=data.list;  
      this.emit('addList', listArray);
    })   
  }

  async addTodo(todo){
   if(this.todos.length<10){
      this.todos.push(todo);
      this.emit('change', this.todos);
      return this.todos;
    } else if(this.todos.length>=10){
      this.todos.shift();
      this.todos.push(todo);
      this.emit('change', this.todos);
      return this.todos;
    }
    
  }

  async addCurrentTodo(curtodo){
    if (this.curtodo.length===0){
      this.curtodo+=curtodo;
      this.emit('change_current', curtodo);
    } else{
      this.curtodo=[];
      this.curtodo+=curtodo;
      this.emit('change_current', curtodo);
    }
    return(curtodo);
  }

  async addList(listArray){ 
    if (this.listArray.length===0){
      this.listArray+=listArray;
      this.emit('change_list', listArray);
    } else{
       this.emit('remove_list',listArray);
      console.log(this.listArray);
      this.listArray+=listArray;
      console.log(this.listArray);
      this.emit('change_list', listArray);
    }
    return listArray;
  }

  async deleteItem(id){
    this.todos=this.todos.filter(todo=>todo.id!==id);
    this.emit('change', this.todos);
  }
}