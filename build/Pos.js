"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pos = /** @class */ (function () {
    function Pos(x, y) {
        if (x < 0 || y < 0) {
            throw new Error("Invalid position number");
        }
        this._x = x;
        this._y = y;
    }
    Object.defineProperty(Pos.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (x) {
            this._x = x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pos.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (y) {
            this._y = y;
        },
        enumerable: true,
        configurable: true
    });
    return Pos;
}());
exports.Pos = Pos;
//# sourceMappingURL=Pos.js.map