"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Init = exports.defaultValue = void 0;
exports.defaultValue = {
    toggleIn: false,
    toggleOut: false,
    time: 0.8,
    order: 0,
    _init: true,
    _toggle: 0,
    _time: 0
};
function Init(obj) {
    obj.toggleIn ? exports.defaultValue.toggleIn = obj.toggleIn : exports.defaultValue.toggleIn = false;
    obj.toggleOut ? exports.defaultValue.toggleOut = obj.toggleOut : exports.defaultValue.toggleOut = false;
    obj._init = exports.defaultValue._init;
    obj._toggle = exports.defaultValue._toggle;
    obj._time = exports.defaultValue._time;
    // animes
    obj.animes.forEach(function (anime) {
        !anime.order ? anime.order = 0 : null;
    });
    obj._lastorder = 0;
}
exports.Init = Init;
//# sourceMappingURL=Default.js.map