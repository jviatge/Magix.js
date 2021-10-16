"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timeline = void 0;
function Timeline(obj) {
    // sort by order
    obj.animes.sort(compare);
    // get order and time
    var order = [];
    obj.animes.forEach(function (anime) {
        order.push({
            order: anime.order,
        });
    });
    // get Max time by order
    var lineorder = [];
    var ordertmp = 0;
    var maxTime = 0;
    obj.animes.forEach(function (anime, i) {
        if (ordertmp == anime.order) {
            if (maxTime < anime.time) {
                maxTime = anime.time;
            }
        }
        else {
            lineorder.push({
                _order: ordertmp,
                _time: maxTime
            });
            maxTime = anime.time;
            ordertmp = anime.order;
        }
        if (i === obj.animes.length - 1) {
            lineorder.push({
                _order: ordertmp,
                _time: maxTime
            });
        }
    });
    obj._Lineorder = lineorder;
    // get reverse
    // let cacheReverse = Reverse(order, true)
    // set _timeline
    // obj.animes.forEach((anime, index) => {
    //     anime._timeline = {
    //         _id: index,
    //         _order:[order[index].order, cacheReverse[index].order],
    //     }
    // });
}
exports.Timeline = Timeline;
// reorder by order
function compare(a, b) {
    if (a.order > b.order)
        return 1;
    if (b.order > a.order)
        return -1;
    return 0;
}
//# sourceMappingURL=Timeline.js.map