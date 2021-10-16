"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Listener = void 0;
var Transition_1 = require("./Transition");
var Action_1 = require("./Action");
var Toggle_1 = require("./Toggle");
var Listener = /** @class */ (function () {
    function Listener(obj) {
        this.obj = obj;
        this.create();
    }
    Listener.prototype.create = function () {
        // list targets   
        switch (this.obj.event) {
            case 'click':
                this.click();
                break;
            case 'hover':
                break;
            case 'key':
                break;
            case 'scroll':
                break;
        }
    };
    // Click
    Listener.prototype.click = function () {
        var _this = this;
        this.obj._target.forEach(function (target) {
            target.addEventListener('click', function (e) {
                _this.action();
            });
        });
    };
    Listener.prototype.action = function () {
        var _this = this;
        // init order
        this.obj._lastorder = this.obj.animes[0].order;
        // play anime transition / action
        this.obj.animes.forEach(function (anime) {
            (0, Transition_1.Transition)(anime);
            (0, Action_1.Action)(anime, _this.obj);
        });
        // toogle end 
        (0, Toggle_1.Toggle)(this.obj);
    };
    return Listener;
}());
exports.Listener = Listener;
//# sourceMappingURL=Listener.js.map