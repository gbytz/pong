var stage;
var canvas;
var ball;
var palette;
var input;
var keyboard;

function init()
{
    console.log("Init");

    canvas = document.getElementById("main_canvas");
    canvas.width = SCREEN_WIDTH;
    canvas.height = SCREEN_HEIGHT;
    stage = new Stage(canvas);

    keyboard = new KeyboardHandler();
    document.onkeydown = handleKey;
    document.onkeyup = handleKey;

    var map1 = {
        "up": KeyboardHandler.KEY_UP,
        "down": KeyboardHandler.KEY_DOWN,
        "left": KeyboardHandler.KEY_LEFT,
        "right": KeyboardHandler.KEY_RIGHT,
    };
    input1 = new KeyboardInput(keyboard, map1);

    var map2 = {
        "up": KeyboardHandler.KEY_W,
        "down": KeyboardHandler.KEY_S,
        "left": KeyboardHandler.KEY_A,
        "right": KeyboardHandler.KEY_D,
    };
    input2 = new KeyboardInput(keyboard, map2);

    palette1 = new Palette(10, 20, input1);
    palette1.x = 10;
    palette1.y = 20;

    palette2 = new Palette(10, 20, input2);
    palette2.x = 100;
    palette2.y = 80;

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
    stage.addChild(palette1);
    stage.addChild(palette2);

    keyboard.reset();

    if( !Ticker.hasEventListener("tick") )
    {
        Ticker.addEventListener("tick", tick);
    }
}

function tick(event)
{
    palette2.tick(event);
    palette1.tick(event);
    ball.tick(event);
    stage.update(event);
}

function handleKey(event){
    keyboard.setState(event)
}