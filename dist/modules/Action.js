"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Action = void 0;
var Class_1 = require("./Class");
var Css_1 = require("./Css");
var Play_1 = require("./Play");
function Action(anime, obj, init) {
    if (init === void 0) { init = false; }
    anime._target.forEach(function (target) {
        (0, Play_1.Play)(obj, init, anime, function () {
            anime.css ? (0, Css_1.Css)(obj, anime, target) : null;
            anime.class ? (0, Class_1.Class)(obj, anime, target) : null;
        });
    });
}
exports.Action = Action;
//# sourceMappingURL=Action.js.map