"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Magix = void 0;
var Animes_1 = require("./modules/Animes");
var Select_1 = require("./modules/Select");
var Default_1 = require("./modules/Default");
var Listener_1 = require("./modules/Listener");
var Timeline_1 = require("./modules/Timeline");
function Magix(obj) {
    // Start init
    init(obj);
    // Create listener
    var listener = new Listener_1.Listener(obj);
}
exports.Magix = Magix;
function init(obj) {
    // Default value
    (0, Default_1.Init)(obj);
    // Get DOM
    (0, Select_1.Select)(obj);
    // Create Timeline
    (0, Timeline_1.Timeline)(obj);
    // Get Animes
    (0, Animes_1.Animes)(obj);
    // End init
    obj._init = false;
}
//# sourceMappingURL=Magix.js.map