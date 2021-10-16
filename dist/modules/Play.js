"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Play = void 0;
function Play(obj, init, anime, action) {
    if (!init) {
        if (obj._lastorder != anime.order) {
            obj._time += obj._lastime * 1000;
            obj._lastorder = anime.order;
        }
        else {
            var Lineorder = obj._Lineorder.filter(function (Lineorder) {
                return Lineorder._order === anime.order;
            });
            obj._lastorder = Lineorder[0]._order;
            obj._lastime = Lineorder[0]._time;
        }
    }
    setTimeout(function () {
        action();
    }, obj._time);
}
exports.Play = Play;
//# sourceMappingURL=Play.js.map