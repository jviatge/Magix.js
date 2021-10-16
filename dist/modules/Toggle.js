"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Toggle = void 0;
var Reverse_1 = require("./Reverse");
function Toggle(obj) {
    // REVERSE
    obj.animes = (0, Reverse_1.Reverse)(obj.animes, true);
    obj._Lineorder = (0, Reverse_1.Reverse)(obj._Lineorder, true);
    // SWITCH
    obj._toggle == 1 ? obj._toggle = 0 : obj._toggle = 1;
    // RESET
    obj._time = 0;
    obj._lastime = 0;
    obj._lastorder = 0;
}
exports.Toggle = Toggle;
//# sourceMappingURL=Toggle.js.map