(function(window)
{
    function Palette(width, height, input){
        this.Shape_constructor();
        this.activate(width, height);
        this._input = input;
    }
    var p = extend(Palette, Shape);

// Static properties:
    var VELOCITY = 10;

// Public properties:
    p.w;
    p.h;
    p.x;
    p.y;
    p.vX;
    p.vY;

// Public methods:
    p.activate = function(width, height)
    {
        this._getShape(width, height);
    }

    p.tick = function(event)
    {
        var direction = this._input.get_direction();
        this.vX = VELOCITY * direction.x;
        this.vY = VELOCITY * direction.y;
        
        
        this.x += this.vX;
        this.y += this.vY;                
    }

// Private methods:
    p._getShape = function(width, height)
    {
        this.w = width;
        this.h = height;
        this.graphics.clear();
        this.graphics.beginFill("red").drawRect(0, 0, width, height);
    }
    p._input;

    window.Palette = promote(Palette, "Shape");
}(window));
