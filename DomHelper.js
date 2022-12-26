class DomHelper {
  createTitle() {
    return this.createElement({
      tag: 'h2',
      classList: ['city'],
      textContent: '',
    });
  }

  createImageConteiner(children) {
    return this.createElement({
      tag: 'div',
      classList: ['image-conteiner'],
      children,
      childrenAction: 'append',
    });
  }

  createImage(attributes) {
    return this.createElement({
      tag: 'img',
      classList: ['image-weather'],
      attributes,
    });
  }

  createDegrees() {
    return this.createElement({
      tag: 'p',
      classList: ['degrees'],
      textContent: '', 
    });
  }

  createDescription() {
    return this.createElement({
      tag: 'p',
      classList: ['weather-description'],
      textContent: '',
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
