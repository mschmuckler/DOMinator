class DOMNodeCollection {
  constructor(htmlElements) {
    this.htmlElements = htmlElements;
  }

  html(newInner) {
    if (newInner || newInner === "") {
      this.htmlElements.forEach(el => {
        el.innerHTML = newInner;
      });
    } else {
      return this.htmlElements[0].innerHTML;
    }

    return this;
  }

  empty() {
    this.html("");
    return this;
  }

  append(childElements) {
    this.htmlElements.forEach(parentEl => {
      childElements.htmlElements.forEach(childEl => {
        parentEl.appendChild(childEl);
      });
    });

    return this;
  }

  attr(attribute, value) {
    if (value || value === "") {
      this.htmlElements.forEach(el => {
        el.setAttribute(attribute, value);
      });
    } else {
      return this.htmlElements[0].getAttribute(attribute);
    }

    return this;
  }

  addClass(newClass) {
    let replacement = (this.htmlElements[0].className += ` ${newClass}`).trim();
    this.attr('class', replacement);
    return this;
  }

  removeClass(oldClass) {
    const replacement = this.htmlElements[0].className.replace(oldClass, "").trim();
    this.attr('class', replacement);
    return this;
  }

  children() {
    let final = [];

    this.htmlElements.forEach(el => {
      final = final.concat(el.children);
    });

    return new DOMNodeCollection(final);
  }

  parent() {
    let final = [];

    this.htmlElements.forEach(el => {
      final = final.concat(el.parentElement);
    });

    return new DOMNodeCollection(final);
  }

  find(selector) {
    let final = [];
    this.htmlElements.forEach(el => {
      final = final.concat(Array.from(el.querySelectorAll(selector)));
    });
    return new DOMNodeCollection(final);
  }

  remove() {
    this.htmlElements.forEach(el => {
      el.remove();
    });
  }

  on(eventType, callback) {
    this.htmlElements.forEach(el => {
      el.addEventListener(eventType, callback);
      el.eventCallback = callback;
    });
  }

  off(eventType) {
    this.htmlElements.forEach(el => {
      el.removeEventListener(eventType, el.eventCallback);
    });
  }
}

module.exports = DOMNodeCollection;
