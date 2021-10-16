"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transition = void 0;
function Transition(anime) {
    anime._transition = "all " + anime.time + "s ease-in-out";
    anime._target.forEach(function (target) {
        target.style.transition = anime._transition;
    });
}
exports.Transition = Transition;
//# sourceMappingURL=Transition.js.map