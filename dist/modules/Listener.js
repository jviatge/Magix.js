"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Listener = void 0;
var Default_1 = require("./Default");
var Transition_1 = require("./Transition");
var Action_1 = require("./Action");
var Toggle_1 = require("./Toggle");
var Options_1 = require("./Options");
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
                this.hover();
                break;
            case 'key':
                break;
            case 'scroll':
                // https://www.youtube.com/watch?v=55NsKxpUYjQ&t=123s
                break;
        }
    };
    // Click
    Listener.prototype.click = function () {
        var _this = this;
        // get options
        var options = (0, Default_1.click)(this.obj.click);
        this.obj._target.forEach(function (target) {
            if (options.toggleOut) {
                document.addEventListener('click', function (event) {
                    (0, Options_1.toggleOut)(_this.obj, event, function () {
                        _this.action(options);
                    });
                });
            }
            target.addEventListener('click', function (e) {
                _this.action(options);
            });
        });
    };
    // Hover
    Listener.prototype.hover = function () {
        var _this = this;
        // get options
        var options = (0, Default_1.hover)(this.obj.hover);
        this.obj._target.forEach(function (target) {
            target.addEventListener("mouseover", function (e) {
                _this.action(options);
            });
            target.addEventListener("mouseout", function (e) {
                _this.action(options);
            });
        });
    };
    Listener.prototype.action = function (options) {
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