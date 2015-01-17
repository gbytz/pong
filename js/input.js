(function(window)
{
    var KeyboardInput = function(keyboard, key_map)
    {
        this._keyboard = keyboard;
        this._key_map = key_map;
    }
    var p = KeyboardInput.prototype;

// Static properties:

// Public methods:
    p.getDirection = function()
    {
        var direction = {'x': 0, 'y': 0};
        if(this._keyboard.isPressed([this._key_map["up"]])) direction.y += -1;
        if(this._keyboard.isPressed([this._key_map["down"]])) direction.y += 1;
        if(this._keyboard.isPressed([this._key_map["left"]])) direction.x += -1;
        if(this._keyboard.isPressed([this._key_map["right"]])) direction.x += 1;
        return direction
    }

// Private properties:
    p._keyboard;
    p._key_map;

// Private methods:

    window.KeyboardInput = KeyboardInput;

}(window));
