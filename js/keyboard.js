(function(window)
{
    var KeyboardHandler = function()
    {
        this._initialize();
    }

// Static properties:
    // Arrows
    KeyboardHandler.KEYCODE_LEFT = 'LEFT';
    KeyboardHandler.KEYCODE_UP = 'UP';
    KeyboardHandler.KEYCODE_RIGHT = 'RIGHT';
    KeyboardHandler.KEYCODE_DOWN = 'DOWN';

    // Digits
    KeyboardHandler.KEYCODE_0 = '0';
    KeyboardHandler.KEYCODE_1 = '1';
    KeyboardHandler.KEYCODE_2 = '2';
    KeyboardHandler.KEYCODE_3 = '3';
    KeyboardHandler.KEYCODE_4 = '4';
    KeyboardHandler.KEYCODE_5 = '5';
    KeyboardHandler.KEYCODE_6 = '6';
    KeyboardHandler.KEYCODE_7 = '7';
    KeyboardHandler.KEYCODE_8 = '8';
    KeyboardHandler.KEYCODE_9 = '9';

    // Letters
    KeyboardHandler.KEYCODE_A = 'A';
    KeyboardHandler.KEYCODE_B = 'B';
    KeyboardHandler.KEYCODE_C = 'C';
    KeyboardHandler.KEYCODE_D = 'D';
    KeyboardHandler.KEYCODE_E = 'E';
    KeyboardHandler.KEYCODE_F = 'F';
    KeyboardHandler.KEYCODE_G = 'G';
    KeyboardHandler.KEYCODE_H = 'H';
    KeyboardHandler.KEYCODE_I = 'I';
    KeyboardHandler.KEYCODE_J = 'J';
    KeyboardHandler.KEYCODE_K = 'K';
    KeyboardHandler.KEYCODE_L = 'L';
    KeyboardHandler.KEYCODE_M = 'M';
    KeyboardHandler.KEYCODE_N = 'N';
    KeyboardHandler.KEYCODE_O = 'O';
    KeyboardHandler.KEYCODE_P = 'P';
    KeyboardHandler.KEYCODE_Q = 'Q';
    KeyboardHandler.KEYCODE_R = 'R';
    KeyboardHandler.KEYCODE_S = 'S';
    KeyboardHandler.KEYCODE_T = 'T';
    KeyboardHandler.KEYCODE_U = 'U';
    KeyboardHandler.KEYCODE_V = 'V';
    KeyboardHandler.KEYCODE_W = 'W';
    KeyboardHandler.KEYCODE_X = 'X';
    KeyboardHandler.KEYCODE_Y = 'Y';
    KeyboardHandler.KEYCODE_Z = 'Z';

    // Punctuation
    KeyboardHandler.KEYCODE_SEMICOLON = 'SEMICOLON';
    KeyboardHandler.KEYCODE_EQUAL = 'EQUAL';
    KeyboardHandler.KEYCODE_COMMA = 'COMMA';
    KeyboardHandler.KEYCODE_MINUS = 'MINUS';
    KeyboardHandler.KEYCODE_PERIOD = 'PERIOD';
    KeyboardHandler.KEYCODE_SLASH = 'SLASH';
    KeyboardHandler.KEYCODE_BACKQUOTE = 'BACKQUOTE';
    KeyboardHandler.KEYCODE_BRACKETLEFT = 'BRACKETLEFT';
    KeyboardHandler.KEYCODE_BACKSLASH = 'BACKSLASH';
    KeyboardHandler.KEYCODE_BRACKETRIGHT = 'BRACKETRIGHT';
    KeyboardHandler.KEYCODE_QUOTE = 'QUOTE';

    // No Printable Keys
    KeyboardHandler.KEYCODE_SHIFTLEFT = 'SHIFTLEFT';
    KeyboardHandler.KEYCODE_SHIFTRIGHT = 'SHIFTRIGHT';
    KeyboardHandler.KEYCODE_CTRLLEFT = 'CTRLLEFT';
    KeyboardHandler.KEYCODE_CTRLRIGHT = 'CTRLRIGHT';
    KeyboardHandler.KEYCODE_ALTLEFT = 'ALTLEFT';
    KeyboardHandler.KEYCODE_ALTRIGHT = 'ALTRIGHT';
    KeyboardHandler.KEYCODE_CAPSLOCK = 'CAPSLOCK';
    KeyboardHandler.KEYCODE_OSLEFT = 'OSLEFT';
    KeyboardHandler.KEYCODE_OSRIGHT = 'OSRIGHT';
    KeyboardHandler.KEYCODE_CONTEXTMENU = 'CONTEXTMENU';
    KeyboardHandler.KEYCODE_ENTER = 'ENTER';
    KeyboardHandler.KEYCODE_SPACE = 'SPACE';
    KeyboardHandler.KEYCODE_TAB = 'TAB';
    KeyboardHandler.KEYCODE_DELETE = 'DELETE';
    KeyboardHandler.KEYCODE_END = 'END';
    KeyboardHandler.KEYCODE_HOME = 'HOME';
    KeyboardHandler.KEYCODE_INSERT = 'INSERT';
    KeyboardHandler.KEYCODE_PAGEDOWN = 'PAGEDOWN';
    KeyboardHandler.KEYCODE_PAGEUP = 'PAGEUP';
    KeyboardHandler.KEYCODE_ESCAPE = 'ESCAPE';
    KeyboardHandler.KEYCODE_PRINTSCREEN = 'PRINTSCREEN';
    KeyboardHandler.KEYCODE_SCROLLLOCK = 'SCROLLLOCK';
    KeyboardHandler.KEYCODE_PAUSE = 'PAUSE';

    // TODO: Add numpad and function keys

    KeyboardHandler._keycodes_map = {
        37: KeyboardHandler.KEYCODE_LEFT,
        38: KeyboardHandler.KEYCODE_UP,
        39: KeyboardHandler.KEYCODE_RIGHT,
        40: KeyboardHandler.KEYCODE_DOWN,
        48: KeyboardHandler.KEYCODE_0,
        49: KeyboardHandler.KEYCODE_1,
        50: KeyboardHandler.KEYCODE_2,
        51: KeyboardHandler.KEYCODE_3,
        52: KeyboardHandler.KEYCODE_4,
        53: KeyboardHandler.KEYCODE_5,
        54: KeyboardHandler.KEYCODE_6,
        55: KeyboardHandler.KEYCODE_7,
        56: KeyboardHandler.KEYCODE_8,
        57: KeyboardHandler.KEYCODE_9,
        65: KeyboardHandler.KEYCODE_A,
        66: KeyboardHandler.KEYCODE_B,
        67: KeyboardHandler.KEYCODE_C,
        68: KeyboardHandler.KEYCODE_D,
        69: KeyboardHandler.KEYCODE_E,
        70: KeyboardHandler.KEYCODE_F,
        71: KeyboardHandler.KEYCODE_G,
        72: KeyboardHandler.KEYCODE_H,
        73: KeyboardHandler.KEYCODE_I,
        74: KeyboardHandler.KEYCODE_J,
        75: KeyboardHandler.KEYCODE_K,
        76: KeyboardHandler.KEYCODE_L,
        77: KeyboardHandler.KEYCODE_M,
        78: KeyboardHandler.KEYCODE_N,
        79: KeyboardHandler.KEYCODE_O,
        80: KeyboardHandler.KEYCODE_P,
        81: KeyboardHandler.KEYCODE_Q,
        82: KeyboardHandler.KEYCODE_R,
        83: KeyboardHandler.KEYCODE_S,
        84: KeyboardHandler.KEYCODE_T,
        85: KeyboardHandler.KEYCODE_U,
        86: KeyboardHandler.KEYCODE_V,
        87: KeyboardHandler.KEYCODE_W,
        88: KeyboardHandler.KEYCODE_X,
        89: KeyboardHandler.KEYCODE_Y,
        90: KeyboardHandler.KEYCODE_Z,
        59: KeyboardHandler.KEYCODE_SEMICOLON,
        61: KeyboardHandler.KEYCODE_EQUAL,
        188: KeyboardHandler.KEYCODE_COMMA,
        173: KeyboardHandler.KEYCODE_MINUS,
        190: KeyboardHandler.KEYCODE_PERIOD,
        191: KeyboardHandler.KEYCODE_SLASH,
        192: KeyboardHandler.KEYCODE_BACKQUOTE,
        219: KeyboardHandler.KEYCODE_BRACKETLEFT,
        220: KeyboardHandler.KEYCODE_BACKSLASH,
        221: KeyboardHandler.KEYCODE_BRACKETRIGHT,
        222: KeyboardHandler.KEYCODE_QUOTE,
        16: KeyboardHandler.KEYCODE_SHIFTLEFT,
        16: KeyboardHandler.KEYCODE_SHIFTRIGHT,
        17: KeyboardHandler.KEYCODE_CTRLLEFT,
        17: KeyboardHandler.KEYCODE_CTRLRIGHT,
        18: KeyboardHandler.KEYCODE_ALTLEFT,
        18: KeyboardHandler.KEYCODE_ALTRIGHT,
        20: KeyboardHandler.KEYCODE_CAPSLOCK,
        91: KeyboardHandler.KEYCODE_OSLEFT,
        92: KeyboardHandler.KEYCODE_OSRIGHT,
        93: KeyboardHandler.KEYCODE_CONTEXTMENU,
        13: KeyboardHandler.KEYCODE_ENTER,
        32: KeyboardHandler.KEYCODE_SPACE,
        9: KeyboardHandler.KEYCODE_TAB,
        46: KeyboardHandler.KEYCODE_DELETE,
        35: KeyboardHandler.KEYCODE_END,
        36: KeyboardHandler.KEYCODE_HOME,
        45: KeyboardHandler.KEYCODE_INSERT,
        34: KeyboardHandler.KEYCODE_PAGEDOWN,
        33: KeyboardHandler.KEYCODE_PAGEUP,
        27: KeyboardHandler.KEYCODE_ESCAPE,
        44: KeyboardHandler.KEYCODE_PRINTSCREEN,
        145: KeyboardHandler.KEYCODE_SCROLLLOCK,
        19: KeyboardHandler.KEYCODE_PAUSE
    };


// Public methods:
    var p = KeyboardHandler.prototype;

    p.set_state = function(event)
    {
        var my_code = KeyboardHandler._keycodes_map[event.keyCode]
        this._keys_state[my_code] = (event.type !== "keyup");
    }

    p.get_state = function(keyCode)
    {
        return this._keys_state[keyCode];
    }

    p.reset = function()
    {
        this._keys_state = {
            'LEFT': false,
            'UP': false,
            'RIGHT': false,
            'DOWN': false,
            '0': false,
            '1': false,
            '2': false,
            '3': false,
            '4': false,
            '5': false,
            '6': false,
            '7': false,
            '8': false,
            '9': false,
            'A': false,
            'B': false,
            'C': false,
            'D': false,
            'E': false,
            'F': false,
            'G': false,
            'H': false,
            'I': false,
            'J': false,
            'K': false,
            'L': false,
            'M': false,
            'N': false,
            'O': false,
            'P': false,
            'Q': false,
            'R': false,
            'S': false,
            'T': false,
            'U': false,
            'V': false,
            'W': false,
            'X': false,
            'Y': false,
            'Z': false,
            'SEMICOLON': false,
            'EQUAL': false,
            'COMMA': false,
            'MINUS': false,
            'PERIOD': false,
            'BACKQUOTE': false,
            'SLASH': false,
            'BRACKETLEFT': false,
            'BACKSLASH': false,
            'BRACKETRIGHT': false,
            'QUOTE': false,
            'SHIFTLEFT': false,
            'SHIFTRIGHT': false,
            'CTRLLEFT': false,
            'CTRLRIGHT': false,
            'ALTLEFT': false,
            'ALTRIGHT': false,
            'CAPSLOCK': false,
            'OSLEFT': false,
            'OSRIGHT': false,
            'CONTEXTMENU': false,
            'ENTER': false,
            'SPACE': false,
            'TAB': false,
            'DELETE': false,
            'END': false,
            'HOME': false,
            'INSERT': false,
            'PAGEDOWN': false,
            'PAGEUP': false,
            'ESCAPE': false,
            'PRINTSCREEN': false,
            'SCROLLLOCK': false,
            'PAUSE': false
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
