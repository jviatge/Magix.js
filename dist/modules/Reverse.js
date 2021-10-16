"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reverse = void 0;
function Reverse(input, isActive) {
    if (isActive) {
        var ret = new Array;
        for (var i = input.length - 1; i >= 0; i--) {
            ret.push(input[i]);
        }
        return ret;
    }
    else {
        return input;
    }
}
exports.Reverse = Reverse;
//# sourceMappingURL=Reverse.js.map