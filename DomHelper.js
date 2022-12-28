class DomHelper {
  createDate(date) {
    const newdate=date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear() +' '+date.getHours()+':'+date.getMinutes();
    return this.createElement({
      tag: 'div',
      classList: ['date'],
      textContent: `${newdate}`,
    });
  }

  createTitle(city) {
    return this.createElement({
      tag: 'h2',
      classList: ['city'],
      textContent: `${city},`
    });
  }

  createCountry(country) {
    return this.createElement({
      tag: 'h2',
      classList: ['city'],
      textContent: `${country}`
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

  createImageConteiner(children) {
    return this.createElement({
      tag: 'div',
      classList: ['image-conteiner', 'd-flex'],
      children,
      childrenAction: 'append',
    });
  }

  createImage(img) {
    return this.createElement({
      tag: 'img',
      classList: ['image-weather'],
      attributes:  [{ prop: 'src', value: img }],
    });
  }

  createDegrees(temp) {
    const integerTemp=Math.round(temp);
    return this.createElement({
      tag: 'p',
      classList: ['degrees'],
      textContent:`${integerTemp} C`, 
    });
  }

  createTemp(tempLike) {
    const integer=Math.round(tempLike);
    return this.createElement({
      tag: 'p',
      classList: ['temp_like'],
      textContent:`По ощущениям: ${integer} C.` 
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
      tag: 'p',
      classList: ['pressure'],
      textContent: `Давление: ${pressure} гПа`,
    });
  }

  createParamConteiner(children) {
    return this.createElement({
      tag: 'div',
      classList: ['param_weather'],
      children,
      childrenAction: 'append',
    });
  }

  

  createConteiner(children) {
    return this.createElement({
      tag: 'div',
      classList: ['conteiner'],
      children,
      childrenAction: 'append',
    });
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
