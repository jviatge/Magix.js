"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggleOut = void 0;
/* CLICK */
function toggleOut(obj, event, action) {
    if (obj._toggle == 1) {
        var contain_1 = false;
        obj._Allel.forEach(function (el) {
            el.forEach(function (element) {
                if (element.contains(event.target)) {
                    contain_1 = true;
                }
            });
        });
        if (!contain_1) {
            action();
        }
    }
}
exports.toggleOut = toggleOut;
//# sourceMappingURL=Options.js.map