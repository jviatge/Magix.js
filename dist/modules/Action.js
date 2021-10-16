"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Action = void 0;
var Play_1 = require("./Play");
function Action(anime, obj, init) {
    if (init === void 0) { init = false; }
    anime._target.forEach(function (target) {
        (0, Play_1.Play)(obj, init, anime, function () {
            anime.css ? target.style[anime.css[0]] = anime.css[1][obj._toggle] : null;
            //     // CLASS
            //     if (anime.class) {
            //         if (anime.class.length == 1) {
            //             target.classList.toggle(anime.class[0])
            //         } else if (anime.class.length == 2) {
            //             anime.class.map( (v: string) => target.classList.toggle(v) )
            //         }
            //     }
        });
    });
}
exports.Action = Action;
//# sourceMappingURL=Action.js.map