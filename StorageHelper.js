class StorageHelper{
  static getItem(key){
  
    const value=localStorage.getItem(key);
    if (value){
      return JSON.parse(value);
    }
    return null;
  
    
  } 

  static setItem(key, value){
    while(localStorage.length<11){
    localStorage.setItem(key, JSON.stringify(value));
    }
  }

} 