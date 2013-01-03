# JS Rect object

Used to create coloured rectangles in the browser. This is a sample project build for a blog article on [my Architecture process]().

## Usage

```js
// Short form
var rect = new Rect(100, 100, 'red');
rect.position(50, 50);
rect.show();
rect.hide();

// Long form
var rect = new Rect();
rect.size(100, 100);
rect.color('red');
rect.position(50, 50);
rect.show();
rect.hide();
```