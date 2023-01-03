class DomHelper {
  createDate(now) {
    console.log(now);
    return this.createElement({
      tag: 'p',
      classList: ['date'],
      textContent: `${now}`,
    });
  }
  createLiDate(date) {
    return this.createElement({
      tag: 'p',
      classList: ['li_date'],
      textContent: `${date}`,
    });
  }

  createTitle(city) {
    return this.createElement({
      tag: 'p',
      classList: ['city'],
      textContent: `${city}`
    });
  }

  createCountry(country) {
    return this.createElement({
      tag: 'p',
      classList: ['city'],
      textContent: `,${country}`
    });
  }

  createPlaceCountry(children) {
    return this.createElement({
      tag: 'div',
      classList: ['place_conteiner', 'd-flex'],
      children,
      childrenAction: 'append',
    });
  }

  createDivTitle(children) {
    return this.createElement({
      tag: 'div',
      classList: ['div_title'],
      children,
      childrenAction: 'append',
    });
  }

  createImageConteiner(children) {
    return this.createElement({
      tag: 'div',
      classList: ['image-conteiner', 'd-flex', 'justify-content-start', 'align-items-end'],
      children,
      childrenAction: 'append',
    });
  }

  createImage(img) {
    if(img==='01d'){
      return this.createElement({
        tag: 'img',
        classList: ['image-weather'],
        attributes:  [{ prop: 'src', value: `http://openweathermap.org/img/wn/01d@2x.png` }],
      }); 
    } else if (img==='01n'){
      return this.createElement({
        tag: 'img',
        classList: ['image-weather'],
        attributes:  [{ prop: 'src', value: `http://openweathermap.org/img/wn/01n@2x.png` }],
      }); 
    } else if(img==='02d'){
      return this.createElement({
        tag: 'img',
        classList: ['image-weather'],
        attributes:  [{ prop: 'src', value: `http://openweathermap.org/img/wn/02d@2x.png` }],
      }); 
    } else if(img==='02n'){
      return this.createElement({
        tag: 'img',
        classList: ['image-weather'],
        attributes:  [{ prop: 'src', value: `http://openweathermap.org/img/wn/02n@2x.png` }],
      }); 
    } else if(img==='03d'){
      return this.createElement({
        tag: 'img',
        classList: ['image-weather'],
        attributes:  [{ prop: 'src', value: `http://openweathermap.org/img/wn/03d@2x.png` }],
      }); 
    } else if(img==='03n'){
      return this.createElement({
        tag: 'img',
        classList: ['image-weather'],
        attributes:  [{ prop: 'src', value: `http://openweathermap.org/img/wn/03n@2x.png` }],
      }); 
    } else if(img==='04d'){
      return this.createElement({
        tag: 'img',
        classList: ['image-weather'],
        attributes:  [{ prop: 'src', value: `http://openweathermap.org/img/wn/04d@2x.png` }],
      }); 
    } else if(img==='04n'){
      return this.createElement({
        tag: 'img',
        classList: ['image-weather'],
        attributes:  [{ prop: 'src', value: `http://openweathermap.org/img/wn/04n@2x.png` }],
      }); 
    } else if(img==='09d'){
      return this.createElement({
        tag: 'img',
        classList: ['image-weather'],
        attributes:  [{ prop: 'src', value: `http://openweathermap.org/img/wn/09d@2x.png` }],
      }); 
    } else if(img==='09n'){
      return this.createElement({
        tag: 'img',
        classList: ['image-weather'],
        attributes:  [{ prop: 'src', value: `http://openweathermap.org/img/wn/09n@2x.png` }],
      }); 
    } else if(img==='10d'){
      return this.createElement({
        tag: 'img',
        classList: ['image-weather'],
        attributes:  [{ prop: 'src', value: `http://openweathermap.org/img/wn/10d@2x.png` }],
      }); 
    } else if(img==='10n'){
      return this.createElement({
        tag: 'img',
        classList: ['image-weather'],
        attributes:  [{ prop: 'src', value: `http://openweathermap.org/img/wn/10n@2x.png` }],
      }); 
    } else if(img==='11d'){
      return this.createElement({
        tag: 'img',
        classList: ['image-weather'],
        attributes:  [{ prop: 'src', value: `http://openweathermap.org/img/wn/11d@2x.png` }],
      }); 
    } else if(img==='11n'){
      return this.createElement({
        tag: 'img',
        classList: ['image-weather'],
        attributes:  [{ prop: 'src', value: `http://openweathermap.org/img/wn/11n@2x.png` }],
      }); 
    } else if(img==='13d'){
      return this.createElement({
        tag: 'img',
        classList: ['image-weather'],
        attributes:  [{ prop: 'src', value: `http://openweathermap.org/img/wn/13d@2x.png` }],
      }); 
    } else if(img==='13n'){
      return this.createElement({
        tag: 'img',
        classList: ['image-weather'],
        attributes:  [{ prop: 'src', value: `http://openweathermap.org/img/wn/13n@2x.png` }],
      }); 
    } else if(img==='50d'){
      return this.createElement({
        tag: 'img',
        classList: ['image-weather'],
        attributes:  [{ prop: 'src', value: `http://openweathermap.org/img/wn/50d@2x.png` }],
      }); 
    } else if(img==='50n'){
      return this.createElement({
        tag: 'img',
        classList: ['image-weather'],
        attributes:  [{ prop: 'src', value: `http://openweathermap.org/img/wn/50n@2x.png` }],
      }); 
    }
   
  }

  createDegrees(temp) {
    const integerTemp=Math.round(temp);
    return this.createElement({
      tag: 'p',
      classList: ['degrees'],
      textContent:`${integerTemp}C`, 
    });
  }

  createTemp(tempLike) {
    const integer=Math.round(tempLike);
    return this.createElement({
      tag: 'p',
      classList: ['temp_like'],
      textContent:`Feels like: ${integer} C.` 
    });
  }

  createDescr(newDescr) {
    return this.createElement({
      tag: 'p',
      classList: ['descr_weather'],
      textContent:`${newDescr}.`
    });
  }

  createDescription(children) {
    return this.createElement({
      tag: 'div',
      classList: ['weather-description', 'd-flex'],
      children,
      childrenAction: 'append',
    });
  }

  createPressure(pressure) {
    return this.createElement({
      tag: 'li',
      classList: ['pressure', 'ul_item'],
      textContent: `Pressure: ${pressure} hPa`,
    });
  }

  createWind(wind){
    if(wind>270 & wind<360){
      return this.createElement({
        tag: 'p',
        classList: ['wind'],
        textContent: 'NW',
      });  
    } else if (wind>0 & wind<90){
      return this.createElement({
        tag: 'p',
        classList: ['wind'],
        textContent: 'NE',
      });  
    } else if (wind>90 & wind<180){
      return this.createElement({
        tag: 'p',
        classList: ['wind'],
        textContent: 'SE',
      });  
    } else if (wind>180 & wind<270){
      return this.createElement({
        tag: 'p',
        classList: ['wind'],
        textContent: 'SW',
      }); 
    } else if (wind===360){
      return this.createElement({
        tag: 'p',
        classList: ['wind'],
        textContent: 'N',
      }); 
    } else if (wind===0){
      return this.createElement({
        tag: 'p',
        classList: ['wind'],
        textContent: '',
      }); 
    } else if (wind===90){
      return this.createElement({
        tag: 'p',
        classList: ['wind'],
        textContent: 'E',
      }); 
    } else if (wind===180){
      return this.createElement({
        tag: 'p',
        classList: ['wind'],
        textContent: 'S',
      }); 
    } else if (wind===270){
      return this.createElement({
        tag: 'p',
        classList: ['wind'],
        textContent: 'W',
      }); 
    } 
    
  }

  createSpeed(speedOfWind){
    return this.createElement({
      tag: 'p',
      classList: ['speedwind'],
      textContent: `Wind ${speedOfWind} m/s `,
    }); 
  }

  createHumidity(humidity){
    return this.createElement({
      tag: 'li',
      classList: ['humidity', 'ul_item'],
      textContent: `Humidity: ${humidity} %`,
    }); 
  }
  createDivWind([speedOfWind, wind]){
    return this.createElement({
      tag: 'li',
      classList: ['div_wind', 'ul_item', 'd-flex'],
      children: [speedOfWind, wind],
      childrenAction: 'append',
    }); 
  }

  createUlDescr(children){
    return this.createElement({
      tag: 'ul',
      classList: ['ul_descr'],
      children,
      childrenAction: 'append',
    });
  }

  createDivDescr(children){
    return this.createElement({
      tag: 'div',
      classList: ['div_descr'],
      children,
      childrenAction: 'append',
    }); 
  }

  createConteiner(children) {
    return this.createElement({
      tag: 'div',
      classList: ['current_conteiner'],
      children,
      childrenAction: 'append',
    });
  }
  
  createLi(children){
    return this.createElement({
      tag: 'li',
      classList: ['d-flex', 'justify-content-between'],
      children,
      childrenAction: 'append',
    });
  }

  createTodoItem(children){
    return this.createElement({
      tag: 'li',
      classList: ['todo_item', 'd-flex', 'justify-content-around', 'align-items-end'],
      children,
      childrenAction: 'append',
    })
  }

  createButton(){
    return this.createElement({
      tag: 'button',
      classList: ['btn', 'btn-secondary'],
      textContent: 'delete',
    })
  }

  createElement({
    tag,
    classList,
    attributes,
    textContent,
    handlers,
    children,
    childrenAction,
  }) {
    const element = document.createElement(tag);

    if (classList?.length) {
      element.classList.add(...classList);
    }

    if (attributes?.length) {
      attributes.forEach(({ prop, value }) => {
        element.setAttribute(prop, value);
      });
    }

    if (textContent) {
      element.textContent = textContent;
    }

    if (handlers?.length) {
      handlers.forEach(({ event, handler}) => {
        element.addEventListener(event, handler);
      });
    }

    if (children) {
      element[childrenAction](...children);
    }

    return element;
  }
}
