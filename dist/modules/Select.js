"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Select = void 0;
function Select(obj) {
    var Allel = [];
    // target start
    obj._target = document.querySelectorAll(obj.target);
    Allel.push(obj._target);
    // target animes
    obj.animes.forEach(function (anime) {
        if (anime.target) {
            anime._target = document.querySelectorAll(anime.target);
            Allel.push(anime._target);
        }
        else {
            anime._target = obj._target;
        }
    });
    // Get all element of init
    obj._Allel = Allel;
}
exports.Select = Select;
//# sourceMappingURL=Select.js.map