(function(window)
{
// Static properties:
    var KEYCODE_LEFT = 37;
    var KEYCODE_UP = 38;
    var KEYCODE_RIGHT = 39;
    var KEYCODE_DOWN = 40;

// Public methods:
    var Input = function()
    {
        this._initialize();
    }

    var p = Input.prototype;

    p.get_direction = function()
    {
        var direction = new Object();
        direction.x = 0;
        direction.y = 0;
        if(this._key_pressed[KEYCODE_UP]) direction.y += -1;
        if(this._key_pressed[KEYCODE_DOWN]) direction.y += 1;
        if(this._key_pressed[KEYCODE_LEFT]) direction.x += -1;
        if(this._key_pressed[KEYCODE_RIGHT]) direction.x += 1;
        return direction
    }

    p.set_state = function(event)
    {
        this._key_pressed[event.keyCode] = true;
    }

    p.reset_state = function(event)
    {
        this._key_pressed[event.keyCode] = false;
    }

    p.reset = function()
    {
        for(k in this._key_pressed)
        {
            this._key_pressed[k] = false;
        }
    }

// Private properties:
    p._key_pressed;

// Private methods:
    p._initialize = function()
    {
        this._key_pressed = {KEYCODE_UP: false,
                             KEYCODE_DOWN: false,
                             KEYCODE_LEFT: false,
                             KEYCODE_RIGHT: false};
    }

    window.Input = Input;
}(window));
