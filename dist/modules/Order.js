"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
function Order(anime, init, action) {
    var time = 0;
    // if (anime.order != 0 && !init) {
    //     time = anime._prevtime
    // } 
    setTimeout(function () {
        action();
    }, time);
}
exports.Order = Order;
//# sourceMappingURL=Order.js.map