"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Css = void 0;
function Css(obj, anime, target) {
    var style;
    for (var i = 0; i < anime.css.length; i++) {
        if (i % 2 == 0) {
            style = anime.css[i];
        }
        else {
            target.style[style] = anime.css[i][obj._toggle];
        }
    }
}
exports.Css = Css;
//# sourceMappingURL=Css%20copy.js.map