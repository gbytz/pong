var stage;
var canvas;
var ball;

function init()
{
    console.log("Init");

    canvas = document.getElementById("main_canvas");
    canvas.width = SCREEN_WIDTH;
    canvas.height = SCREEN_HEIGHT;

    stage = new Stage(canvas);

    ball = new Shape();
    ball.graphics.beginFill("red").drawCircle(0, 0, 10);
    ball.x = 630;
    ball.y = 470;

    restart();
}

function restart()
{
    console.log("Restart");

    stage.removeAllChildren();
    stage.clear();
    stage.addChild(ball);
    if( !Ticker.hasEventListener("tick") )
    {
        Ticker.addEventListener("tick", tick);
    }
}

function tick(event)
{
    stage.update(event);
}
