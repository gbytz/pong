(function(window)
{
    var KeyboardHandler = function()
    {
        this._initialize();
    }
    var p = KeyboardHandler.prototype;

// Static properties:
    // Arrows
    KeyboardHandler.KEY_LEFT = 'LEFT';
    KeyboardHandler.KEY_UP = 'UP';
    KeyboardHandler.KEY_RIGHT = 'RIGHT';
    KeyboardHandler.KEY_DOWN = 'DOWN';

    // Digits
    KeyboardHandler.KEY_0 = '0';
    KeyboardHandler.KEY_1 = '1';
    KeyboardHandler.KEY_2 = '2';
    KeyboardHandler.KEY_3 = '3';
    KeyboardHandler.KEY_4 = '4';
    KeyboardHandler.KEY_5 = '5';
    KeyboardHandler.KEY_6 = '6';
    KeyboardHandler.KEY_7 = '7';
    KeyboardHandler.KEY_8 = '8';
    KeyboardHandler.KEY_9 = '9';

    // Letters
    KeyboardHandler.KEY_A = 'A';
    KeyboardHandler.KEY_B = 'B';
    KeyboardHandler.KEY_C = 'C';
    KeyboardHandler.KEY_D = 'D';
    KeyboardHandler.KEY_E = 'E';
    KeyboardHandler.KEY_F = 'F';
    KeyboardHandler.KEY_G = 'G';
    KeyboardHandler.KEY_H = 'H';
    KeyboardHandler.KEY_I = 'I';
    KeyboardHandler.KEY_J = 'J';
    KeyboardHandler.KEY_K = 'K';
    KeyboardHandler.KEY_L = 'L';
    KeyboardHandler.KEY_M = 'M';
    KeyboardHandler.KEY_N = 'N';
    KeyboardHandler.KEY_O = 'O';
    KeyboardHandler.KEY_P = 'P';
    KeyboardHandler.KEY_Q = 'Q';
    KeyboardHandler.KEY_R = 'R';
    KeyboardHandler.KEY_S = 'S';
    KeyboardHandler.KEY_T = 'T';
    KeyboardHandler.KEY_U = 'U';
    KeyboardHandler.KEY_V = 'V';
    KeyboardHandler.KEY_W = 'W';
    KeyboardHandler.KEY_X = 'X';
    KeyboardHandler.KEY_Y = 'Y';
    KeyboardHandler.KEY_Z = 'Z';

    // Punctuation
    KeyboardHandler.KEY_SEMICOLON = 'SEMICOLON';
    KeyboardHandler.KEY_EQUAL = 'EQUAL';
    KeyboardHandler.KEY_COMMA = 'COMMA';
    KeyboardHandler.KEY_MINUS = 'MINUS';
    KeyboardHandler.KEY_PERIOD = 'PERIOD';
    KeyboardHandler.KEY_SLASH = 'SLASH';
    KeyboardHandler.KEY_BACKQUOTE = 'BACKQUOTE';
    KeyboardHandler.KEY_BRACKETLEFT = 'BRACKETLEFT';
    KeyboardHandler.KEY_BACKSLASH = 'BACKSLASH';
    KeyboardHandler.KEY_BRACKETRIGHT = 'BRACKETRIGHT';
    KeyboardHandler.KEY_QUOTE = 'QUOTE';

    // No Printable Keys
    KeyboardHandler.KEY_SHIFTLEFT = 'SHIFTLEFT';
    KeyboardHandler.KEY_SHIFTRIGHT = 'SHIFTRIGHT';
    KeyboardHandler.KEY_CTRLLEFT = 'CTRLLEFT';
    KeyboardHandler.KEY_CTRLRIGHT = 'CTRLRIGHT';
    KeyboardHandler.KEY_ALTLEFT = 'ALTLEFT';
    KeyboardHandler.KEY_ALTRIGHT = 'ALTRIGHT';
    KeyboardHandler.KEY_CAPSLOCK = 'CAPSLOCK';
    KeyboardHandler.KEY_OSLEFT = 'OSLEFT';
    KeyboardHandler.KEY_OSRIGHT = 'OSRIGHT';
    KeyboardHandler.KEY_CONTEXTMENU = 'CONTEXTMENU';
    KeyboardHandler.KEY_ENTER = 'ENTER';
    KeyboardHandler.KEY_SPACE = 'SPACE';
    KeyboardHandler.KEY_TAB = 'TAB';
    KeyboardHandler.KEY_DELETE = 'DELETE';
    KeyboardHandler.KEY_END = 'END';
    KeyboardHandler.KEY_HOME = 'HOME';
    KeyboardHandler.KEY_INSERT = 'INSERT';
    KeyboardHandler.KEY_PAGEDOWN = 'PAGEDOWN';
    KeyboardHandler.KEY_PAGEUP = 'PAGEUP';
    KeyboardHandler.KEY_ESCAPE = 'ESCAPE';
    KeyboardHandler.KEY_PRINTSCREEN = 'PRINTSCREEN';
    KeyboardHandler.KEY_SCROLLLOCK = 'SCROLLLOCK';
    KeyboardHandler.KEY_PAUSE = 'PAUSE';

    // TODO: Add numpad and function keys

    KeyboardHandler._keycodes_map = {
        37: KeyboardHandler.KEY_LEFT,
        38: KeyboardHandler.KEY_UP,
        39: KeyboardHandler.KEY_RIGHT,
        40: KeyboardHandler.KEY_DOWN,
        48: KeyboardHandler.KEY_0,
        49: KeyboardHandler.KEY_1,
        50: KeyboardHandler.KEY_2,
        51: KeyboardHandler.KEY_3,
        52: KeyboardHandler.KEY_4,
        53: KeyboardHandler.KEY_5,
        54: KeyboardHandler.KEY_6,
        55: KeyboardHandler.KEY_7,
        56: KeyboardHandler.KEY_8,
        57: KeyboardHandler.KEY_9,
        65: KeyboardHandler.KEY_A,
        66: KeyboardHandler.KEY_B,
        67: KeyboardHandler.KEY_C,
        68: KeyboardHandler.KEY_D,
        69: KeyboardHandler.KEY_E,
        70: KeyboardHandler.KEY_F,
        71: KeyboardHandler.KEY_G,
        72: KeyboardHandler.KEY_H,
        73: KeyboardHandler.KEY_I,
        74: KeyboardHandler.KEY_J,
        75: KeyboardHandler.KEY_K,
        76: KeyboardHandler.KEY_L,
        77: KeyboardHandler.KEY_M,
        78: KeyboardHandler.KEY_N,
        79: KeyboardHandler.KEY_O,
        80: KeyboardHandler.KEY_P,
        81: KeyboardHandler.KEY_Q,
        82: KeyboardHandler.KEY_R,
        83: KeyboardHandler.KEY_S,
        84: KeyboardHandler.KEY_T,
        85: KeyboardHandler.KEY_U,
        86: KeyboardHandler.KEY_V,
        87: KeyboardHandler.KEY_W,
        88: KeyboardHandler.KEY_X,
        89: KeyboardHandler.KEY_Y,
        90: KeyboardHandler.KEY_Z,
        59: KeyboardHandler.KEY_SEMICOLON,
        61: KeyboardHandler.KEY_EQUAL,
        188: KeyboardHandler.KEY_COMMA,
        173: KeyboardHandler.KEY_MINUS,
        190: KeyboardHandler.KEY_PERIOD,
        191: KeyboardHandler.KEY_SLASH,
        192: KeyboardHandler.KEY_BACKQUOTE,
        219: KeyboardHandler.KEY_BRACKETLEFT,
        220: KeyboardHandler.KEY_BACKSLASH,
        221: KeyboardHandler.KEY_BRACKETRIGHT,
        222: KeyboardHandler.KEY_QUOTE,
        16: KeyboardHandler.KEY_SHIFTLEFT,
        16: KeyboardHandler.KEY_SHIFTRIGHT,
        17: KeyboardHandler.KEY_CTRLLEFT,
        17: KeyboardHandler.KEY_CTRLRIGHT,
        18: KeyboardHandler.KEY_ALTLEFT,
        18: KeyboardHandler.KEY_ALTRIGHT,
        20: KeyboardHandler.KEY_CAPSLOCK,
        91: KeyboardHandler.KEY_OSLEFT,
        92: KeyboardHandler.KEY_OSRIGHT,
        93: KeyboardHandler.KEY_CONTEXTMENU,
        13: KeyboardHandler.KEY_ENTER,
        32: KeyboardHandler.KEY_SPACE,
        9: KeyboardHandler.KEY_TAB,
        46: KeyboardHandler.KEY_DELETE,
        35: KeyboardHandler.KEY_END,
        36: KeyboardHandler.KEY_HOME,
        45: KeyboardHandler.KEY_INSERT,
        34: KeyboardHandler.KEY_PAGEDOWN,
        33: KeyboardHandler.KEY_PAGEUP,
        27: KeyboardHandler.KEY_ESCAPE,
        44: KeyboardHandler.KEY_PRINTSCREEN,
        145: KeyboardHandler.KEY_SCROLLLOCK,
        19: KeyboardHandler.KEY_PAUSE
    };

// Public methods:
    p.setState = function(event)
    {
        var my_code = KeyboardHandler._keycodes_map[event.keyCode]
        this._keys_state[my_code] = (event.type !== "keyup");
    }

    p.isPressed = function(key_constant)
    {
        return this._keys_state[key_constant];
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
