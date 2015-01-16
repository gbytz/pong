(function(window)
{
    var KeyboardHandler = function()
    {
        this._initialize();
    }

// Static properties:
    // Arrows
    KeyboardHandler.KEYCODE_LEFT = KEYCODE_LEFT = 37;
    KeyboardHandler.KEYCODE_UP = KEYCODE_UP = 38;
    KeyboardHandler.KEYCODE_RIGHT = KEYCODE_RIGHT = 39;
    KeyboardHandler.KEYCODE_DOWN = KEYCODE_DOWN = 40;

    // Digits
    KeyboardHandler.KEYCODE_0 = KEYCODE_0 = 48;
    KeyboardHandler.KEYCODE_1 = KEYCODE_1 = 49;
    KeyboardHandler.KEYCODE_2 = KEYCODE_2 = 50;
    KeyboardHandler.KEYCODE_3 = KEYCODE_3 = 51;
    KeyboardHandler.KEYCODE_4 = KEYCODE_4 = 52;
    KeyboardHandler.KEYCODE_5 = KEYCODE_5 = 53;
    KeyboardHandler.KEYCODE_6 = KEYCODE_6 = 54;
    KeyboardHandler.KEYCODE_7 = KEYCODE_7 = 55;
    KeyboardHandler.KEYCODE_8 = KEYCODE_8 = 56;
    KeyboardHandler.KEYCODE_9 = KEYCODE_9 = 57;

    // Letters
    KeyboardHandler.KEYCODE_A = KEYCODE_A = 65;
    KeyboardHandler.KEYCODE_B = KEYCODE_B = 66;
    KeyboardHandler.KEYCODE_C = KEYCODE_C = 67;
    KeyboardHandler.KEYCODE_D = KEYCODE_D = 68;
    KeyboardHandler.KEYCODE_E = KEYCODE_E = 69;
    KeyboardHandler.KEYCODE_F = KEYCODE_F = 70;
    KeyboardHandler.KEYCODE_G = KEYCODE_G = 71;
    KeyboardHandler.KEYCODE_H = KEYCODE_H = 72;
    KeyboardHandler.KEYCODE_I = KEYCODE_I = 73;
    KeyboardHandler.KEYCODE_J = KEYCODE_J = 74;
    KeyboardHandler.KEYCODE_K = KEYCODE_K = 75;
    KeyboardHandler.KEYCODE_L = KEYCODE_L = 76;
    KeyboardHandler.KEYCODE_M = KEYCODE_M = 77;
    KeyboardHandler.KEYCODE_N = KEYCODE_N = 78;
    KeyboardHandler.KEYCODE_O = KEYCODE_O = 79;
    KeyboardHandler.KEYCODE_P = KEYCODE_P = 80;
    KeyboardHandler.KEYCODE_Q = KEYCODE_Q = 81;
    KeyboardHandler.KEYCODE_R = KEYCODE_R = 82;
    KeyboardHandler.KEYCODE_S = KEYCODE_S = 83;
    KeyboardHandler.KEYCODE_T = KEYCODE_T = 84;
    KeyboardHandler.KEYCODE_U = KEYCODE_U = 85;
    KeyboardHandler.KEYCODE_V = KEYCODE_V = 86;
    KeyboardHandler.KEYCODE_W = KEYCODE_W = 87;
    KeyboardHandler.KEYCODE_X = KEYCODE_X = 88;
    KeyboardHandler.KEYCODE_Y = KEYCODE_Y = 89;
    KeyboardHandler.KEYCODE_Z = KEYCODE_Z = 90;

    // Punctuation
    KeyboardHandler.KEYCODE_SEMICOLON = KEYCODE_SEMICOLON = 186;        // ;
    KeyboardHandler.KEYCODE_EQUAL = KEYCODE_EQUAL = 187;                // =
    KeyboardHandler.KEYCODE_COMMA = KEYCODE_COMMA = 188;                // ,
    KeyboardHandler.KEYCODE_MINUS = KEYCODE_MINUS = 189;                // -
    KeyboardHandler.KEYCODE_PERIOD = KEYCODE_PERIOD = 190;              // .
    KeyboardHandler.KEYCODE_BACKQUOTE = KEYCODE_BACKQUOTE = 192;        // `
    KeyboardHandler.KEYCODE_BRACKETLEFT = KEYCODE_BRACKETLEFT = 219;    // [
    KeyboardHandler.KEYCODE_BACKSLASH = KEYCODE_BACKSLASH = 220;        // /
    KeyboardHandler.KEYCODE_BRACKETRIGHT = KEYCODE_BRACKETRIGHT = 221;  // ]
    KeyboardHandler.KEYCODE_QUOTE = KEYCODE_QUOTE = 222;                // '

    // No Printable Keys
    KeyboardHandler.KEYCODE_SHIFTLEFT = KEYCODE_SHIFTLEFT = 16
    KeyboardHandler.KEYCODE_SHIFTRIGHT = KEYCODE_SHIFTRIGHT = 16;
    KeyboardHandler.KEYCODE_CTRLLEFT = KEYCODE_CTRLLEFT = 17;
    KeyboardHandler.KEYCODE_CTRLRIGHT = KEYCODE_CTRLRIGHT = 17;
    KeyboardHandler.KEYCODE_ALTLEFT = KEYCODE_ALTLEFT = 18;
    KeyboardHandler.KEYCODE_ALTRIGHT = KEYCODE_ALTRIGHT = 18;
    KeyboardHandler.KEYCODE_CAPSLOCK = KEYCODE_CAPSLOCK = 20;
    KeyboardHandler.KEYCODE_OSLEFT = KEYCODE_OSLEFT = 91;
    KeyboardHandler.KEYCODE_OSRIGHT = KEYCODE_OSRIGHT = 92;  
    KeyboardHandler.KEYCODE_CONTEXTMENU = KEYCODE_CONTEXTMENU = 93;
    KeyboardHandler.KEYCODE_ENTER = KEYCODE_ENTER = 13;
    KeyboardHandler.KEYCODE_SPACE = KEYCODE_SPACE = 32;
    KeyboardHandler.KEYCODE_TAB = KEYCODE_TAB = 9;
    KeyboardHandler.KEYCODE_DELETE = KEYCODE_DELETE = 46;
    KeyboardHandler.KEYCODE_END = KEYCODE_END = 35;
    KeyboardHandler.KEYCODE_HOME = KEYCODE_HOME = 36;
    KeyboardHandler.KEYCODE_INSERT = KEYCODE_INSERT = 45;
    KeyboardHandler.KEYCODE_PAGEDOWN = KEYCODE_PAGEDOWN = 34;
    KeyboardHandler.KEYCODE_PAGEUP = KEYCODE_PAGEUP = 33;
    KeyboardHandler.KEYCODE_ESCAPE = KEYCODE_ESCAPE = 27;
    KeyboardHandler.KEYCODE_PRINTSCREEN = KEYCODE_PRINTSCREEN = 44;
    KeyboardHandler.KEYCODE_SCROLLLOCK = KEYCODE_SCROLLLOCK = 145;
    KeyboardHandler.KEYCODE_PAUSE = KEYCODE_PAUSE = 19;
    
    // TODO: Add numpad and function keys
    
// Public methods:
    var p = KeyboardHandler.prototype;

    p.set_state = function(event)
    {
        this._keys_state[parseInt(event.keyCode)] = (event.type === "keydown");
    }

    p.get_state = function(keyCode)
    {
        return this._keys_state[keyCode];
    }

    p.reset = function()
    {
        this._keys_state = {
            KEYCODE_UP: false,
            KEYCODE_DOWN: false,
            KEYCODE_LEFT: false,
            KEYCODE_RIGHT: false,
            KEYCODE_0: false,
            KEYCODE_1: false,
            KEYCODE_2: false,
            KEYCODE_3: false,
            KEYCODE_4: false,
            KEYCODE_5: false,
            KEYCODE_6: false,
            KEYCODE_7: false,
            KEYCODE_8: false,
            KEYCODE_9: false,
            KEYCODE_A: false,
            KEYCODE_B: false,
            KEYCODE_C: false,
            KEYCODE_D: false,
            KEYCODE_E: false,
            KEYCODE_F: false,
            KEYCODE_G: false,
            KEYCODE_H: false,
            KEYCODE_I: false,
            KEYCODE_J: false,
            KEYCODE_K: false,
            KEYCODE_L: false,
            KEYCODE_M: false,
            KEYCODE_N: false,
            KEYCODE_O: false,
            KEYCODE_P: false,
            KEYCODE_Q: false,
            KEYCODE_R: false,
            KEYCODE_S: false,
            KEYCODE_T: false,
            KEYCODE_U: false,
            KEYCODE_V: false,
            KEYCODE_W: false,
            KEYCODE_X: false,
            KEYCODE_Y: false,
            KEYCODE_Z: false,
            KEYCODE_SEMICOLON: false,
            KEYCODE_EQUAL: false,
            KEYCODE_COMMA: false,
            KEYCODE_MINUS: false,
            KEYCODE_PERIOD: false,
            KEYCODE_BACKQUOTE: false,
            KEYCODE_BRACKETLEFT: false,
            KEYCODE_BACKSLASH: false,
            KEYCODE_BRACKETRIGHT: false,
            KEYCODE_QUOTE: false,
            KEYCODE_SHIFTLEFT: false,
            KEYCODE_SHIFTRIGHT: false,
            KEYCODE_CTRLLEFT: false,
            KEYCODE_CTRLRIGHT: false,
            KEYCODE_ALTLEFT: false,
            KEYCODE_ALTRIGHT: false,
            KEYCODE_CAPSLOCK: false,
            KEYCODE_OSLEFT: false,
            KEYCODE_OSRIGHT: false,
            KEYCODE_CONTEXTMENU: false,
            KEYCODE_ENTER: false,
            KEYCODE_SPACE: false,
            KEYCODE_TAB: false,
            KEYCODE_DELETE: false,
            KEYCODE_END: false,
            KEYCODE_HOME: false,
            KEYCODE_INSERT: false,
            KEYCODE_PAGEDOWN: false,
            KEYCODE_PAGEUP: false,
            KEYCODE_ESCAPE: false,
            KEYCODE_PRINTSCREEN: false,
            KEYCODE_SCROLLLOCK: false,
            KEYCODE_PAUSE: false
        };
    }

// Private properties:
    p._keys_state;

// Private methods:
    p._initialize = function()
    {
        this.reset();
    }

    window.KeyboardHandler = KeyboardHandler;
}(window));
