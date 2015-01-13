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

    ball = new Ball(10);
    ball.x = canvas.width / 2;
    ball.y = canvas.height / 2;
    
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
    ball.tick(event);
    stage.update(event);
}
