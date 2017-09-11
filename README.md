# DOMinator

DOMinator is a JavaScript library that makes manipulating the DOM easier. Selecting elements, creating them, removing them, setting up event handlers and making asynchronous requests are streamlined into tight, easy to use methods so developers can focus on what's important.

## Setup

Getting started with DOMinator is as simple as `Math.PI`, just download this repo and put the `DOMinator.js` file in your project, and then source the file in your HTML:

```html
<head>
  <script type="text/javascript" src="./DOMinator.js" ></script>
</head>
```

## Usage

### `$l`
This global variable is the bread and butter of DOMinator, and can be used in 3 ways:

  - Selects an HTML element when passed a string
  ```javascript
  // tag
  $l("div");

  // class
  $l(".many-divs");

  // or id
  $l("#only-div");
  ```
  and constructs a `DOMNodeCollection` object that can be manipulated by the DOMinator library. This object will contain an attribute `htmlElements` which is an array of the selected elements.

  - Creates a new HTML element and constructs a `DOMNodeCollection` object around it when passed an array with the desired tag element
  ```javascript
  // for a div element
  $l(["div"]);

  // for an img element
  $l(["img"]);

  // and so on...
  ```

  - Queues a callback to be executed once content is fully loaded when passed a function
  ```javascript
  $l(() => {
      console.log("Initial DOM content has loaded by now!");
  });
  ```

### `html`

If no argument is given, returns the `innerHTML` of the first `htmlElements`. If an argument is given, sets the `innerHTML` of all the `htmlElements` to argument.

### `empty`

Deletes the `innerHTML` of all `htmlElements`.

### `attr`

Takes up to 2 arguments, requires the first. If given `attr(attribute)`, returns the value of that attribute for the first `htmlElements`. If given `attr(attribute, value)`, sets that attribute to the value for all `htmlElements`.

### `addClass`

Given a single argument, adds that value to the class of all `htmlElements`.

### `removeClass`

Given a single argument, removes that value from the class of all `htmlElements`.

### `toggle`

Given a single argument, either adds or removes that value from the class of all `htmlElements` depending on whether it's already in each class.

### `append`

Given another `DOMNodeCollection` object as an argument, appends the argument to all `htmlElements` of the called upon object.

### `remove`

Removes the element entirely from the DOM.

### `find`

Given a selector, selects any `htmlElements` that match and returns a new `DOMNodeCollection` object constructed from the matches.

### `children`

Returns a new `DOMNodeCollection` object of the called upon's children.

### `parent`

Returns a new `DOMNodeCollection` object of the called upon's parent.

### `on`

Given an event type and a callback function, sets up an event listener.

### `off`

Given an event type, clears that event listener.

### `$l.extend`

Given at least 1 argument, merges any number of JS objects and returns a shallow duplication. Later arguments take precedence over earlier ones.

### `$l.ajax`

Dispatches an HTTP request. An options hash can be given with the following attributes:
```javascript
$l.ajax({
  // defaults to GET
  method: "POST",

  // defaults to null
  url: "www.externalapi.com"

  // defaults to null
  data: { "key": "value" }

  // defaults to JSON
  contentType: "application/x-www-form-urlencoded; charset=UTF-8",

  // defaults to logging the payload
  success: (payload) => alert("Successful response"),

  // defaults to logging the error
  failure: (error) => alert("Oops, something went wrong")
});
```

## Demo

[Here](http://matthewschmuckler.com/DOMinator_demo/) is an example of what DOMinator allows developers to do.
