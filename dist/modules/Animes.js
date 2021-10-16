"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animes = void 0;
var Action_1 = require("./Action");
var Default_1 = require("./Default");
function Animes(obj) {
    obj.animes.forEach(function (anime) {
        // init
        !anime.time ? anime.time = Default_1.defaultValue.time : null;
        !anime.order ? anime.order = Default_1.defaultValue.order : null;
        // Init DOM
        (0, Action_1.Action)(anime, obj, obj._init);
        // Init transition
        // Transition(anime)
    });
}
exports.Animes = Animes;
//# sourceMappingURL=Animes.js.map