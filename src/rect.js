(function(global, moduleName, undefined) {

    var Rect = function() {
        // Create an HTML Element 
        this._el = global.document.createElement('div');
        this._el.style.position = 'absolute';

        // Call the constructor
        this.init.apply(this, arguments);
    };
    
    Rect.prototype.init = function(w, h, color) {
        if (parseInt(w) && parseInt(h)) this.size(w, h);
        if (typeof color === "string") this.color(color);
    };

    Rect.prototype.color = function(color) {
        if (typeof color !== "string") throw new Error('rect.color(cssColor): You must pass a valid CSS color');

        this._el.style.backgroundColor = color;
    };

    Rect.prototype.position = function(x, y) {
        if (!parseInt(x) || !parseInt(y)) throw new Error('rect.position(x, y): You must pass (int)x and (int)y values');

        this._el.style.left = x+'px';
        this._el.style.top = y+'px';
    };

    Rect.prototype.size = function(w, h) {
        if (!parseInt(w) || !parseInt(h)) throw new Error('rect.size(width, height): You must pass (int)width and (int)height values');

        this._el.style.width = w+'px';
        this._el.style.height = h+'px';
    };

    Rect.prototype.show = function() {
        var body = document.querySelector('body');
        body.appendChild(this._el);
    };

    Rect.prototype.hide = function() {
        if (this._el.parentElement) {
            this._el.parentElement.removeChild(this._el);
        }
    };
    
    global[moduleName] = Rect;

})(this, 'Rect');