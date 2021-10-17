"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hover = exports.click = exports.Init = exports.defaultValue = void 0;
exports.defaultValue = {
    time: 0.8,
    order: 0,
    _init: true,
    _toggle: 0,
    _time: 0
};
function Init(obj) {
    obj._init = exports.defaultValue._init;
    obj._toggle = exports.defaultValue._toggle;
    obj._time = exports.defaultValue._time;
    // animes
    obj.animes.forEach(function (anime) {
        !anime.order ? anime.order = 0 : null;
        !anime.queue ? anime.queue = false : null;
    });
    obj._lastorder = 0;
}
exports.Init = Init;
function click(click) {
    typeof click === 'undefined' ? click = {
        toggleOut: true
    } : null;
    click.toggleOut == null ? click.toggleOut = true : null;
    return click;
}
exports.click = click;
function hover(hover) {
    // typeof hover === 'undefined' ? hover = {
    // } : null
    return hover;
}
exports.hover = hover;
//# sourceMappingURL=Default.js.map