"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Action = void 0;
var Class_1 = require("./Class");
var Css_1 = require("./Css");
var Play_1 = require("./Play");
function Action(anime, obj, init) {
    if (init === void 0) { init = false; }
    if (init) {
        base(anime, obj, init);
    }
    else {
        obj.event == 'scroll' ? scroll(anime, obj, init) : base(anime, obj, init);
    }
}
exports.Action = Action;
function base(anime, obj, init) {
    if (init === void 0) { init = false; }
    anime._target.forEach(function (target) {
        play(anime, obj, init, target);
    });
}
function scroll(anime, obj, init) {
    if (init === void 0) { init = false; }
    anime._target.forEach(function (target) {
        if (target.offsetTop <= window.scrollY + window.innerHeight / 1.5) {
            play(anime, obj, init, target);
        }
    });
    var scrollValue = (window.innerHeight + window.scrollY) / (document.body.offsetHeight);
    if (scrollValue == 1) {
        play(anime, obj, init, anime._target[anime._target.length - 1]);
    }
}
function play(anime, obj, init, target) {
    (0, Play_1.Play)(obj, init, anime, function () {
        anime.css ? (0, Css_1.Css)(obj, anime, target) : null;
        anime.class ? (0, Class_1.Class)(obj, anime, target) : null;
    });
}
//# sourceMappingURL=Action.js.map