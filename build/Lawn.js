"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Lawn = /** @class */ (function () {
    function Lawn(width, height) {
        this._obstacles = [];
        this._width = width;
        this._height = height;
    }
    Object.defineProperty(Lawn.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (width) {
            this._width = width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Lawn.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (height) {
            this._height = height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Lawn.prototype, "obstacles", {
        get: function () {
            return this._obstacles;
        },
        enumerable: true,
        configurable: true
    });
    Lawn.prototype.addObstacles = function (mower) {
        this._obstacles.push(mower);
    };
    return Lawn;
}());
exports.Lawn = Lawn;
//# sourceMappingURL=Lawn.js.map