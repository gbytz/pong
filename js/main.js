var stage;
var canvas;
var ball;
var palette;
var input;

function init()
{
    console.log("Init");

    document.onkeydown = handleKeyDown;
    document.onkeyup = handleKeyUp;

    canvas = document.getElementById("main_canvas");
    canvas.width = SCREEN_WIDTH;
    canvas.height = SCREEN_HEIGHT;

    stage = new Stage(canvas);

    ball = new Ball(10);
    ball.x = canvas.width / 2;
    ball.y = canvas.height / 2;

    input = new Input();
    palette = new Palette(10, 20, input);
    palette.x = 10;
    palette.y = 20;
    
    restart();
}

function restart()
{
    console.log("Restart");

    stage.removeAllChildren();
    stage.clear();
    stage.addChild(ball);
    stage.addChild(palette);

    input.reset();

    if( !Ticker.hasEventListener("tick") )
    {
        Ticker.addEventListener("tick", tick);
    }
}

function tick(event)
{
    palette.tick(event);
    ball.tick(event);
    stage.update(event);
}

function handleKeyDown(event){
    input.set_state(event)
}

function handleKeyUp(event){
    input.reset_state(event)
}
