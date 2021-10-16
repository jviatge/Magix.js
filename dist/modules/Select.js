"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Select = void 0;
function Select(obj) {
    // target start
    obj._target = document.querySelectorAll(obj.target);
    // target animes
    obj.animes.forEach(function (anime) {
        if (anime.target) {
            anime._target = document.querySelectorAll(anime.target);
        }
        else {
            anime._target = obj._target;
        }
    });
}
exports.Select = Select;
//# sourceMappingURL=Select.js.map