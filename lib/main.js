const DOMNodeCollection = require('./dom_node_collection.js');

const $l = function(selectorReady) {
  if (selectorReady instanceof Function) {
    document.addEventListener("DOMContentLoaded", selectorReady);
  } else if (selectorReady instanceof Array) {
    const DOMElement = document.createElement(selectorReady[0])
    return new DOMNodeCollection([DOMElement])
  } else {
    const DOMArray = Array.from(document.querySelectorAll(selectorReady));
    return new DOMNodeCollection(DOMArray);
  }
};

$l.extend = function(target, ...sources) {
  return Object.assign(target, ...sources);
};

$l.ajax = function(options) {
  const defaults = {
      method: 'GET',
      url: null,
      data: null,
      contentType: 'JSON',
      success(payload) {
        console.log(payload);
      },
      error(error) {
        console.log(error);
      }
  };

  options = $l.extend(defaults, options);

  const xhr = new XMLHttpRequest();
  xhr.open(options.method, options.url);
  xhr.setRequestHeader("Content-Type", options.contentType);
  xhr.onload = options.success;
  xhr.onerror = options.error;
  xhr.send(options.data);
};

window.$l = $l;
