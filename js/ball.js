(function(window)
{
    function Ball(size)
    {
        this.Shape_constructor();
        this.activate(size);
    }
    var p = extend(Ball, Shape);

// Public properties:

    p.radius;
    p.vX;
    p.vY;

// Public methods:
    p.activate = function(size)
    {
        this._getShape(size);
        this._getDirection();
    }

    p.tick = function(event)
    {
        this.x += this.vX;
        this.y += this.vY;
    }

// Private methods:
    p._getShape = function(size)
    {
        this.radius = size;
        this.graphics.clear();
        this.graphics.beginFill("red").drawCircle(0, 0, size);
    }
    
    p._getDirection = function()
    {
        var angle = Math.random() * (Math.PI * 2);
        this.vX = Math.sin(angle) * 4;
        this.vY = Math.cos(angle) * 4;
    }

    window.Ball = promote(Ball, "Shape");
}(window));
