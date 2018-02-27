"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pos_1 = require("./Pos");
var Orientation_1 = require("./enum/Orientation");
var Mower = /** @class */ (function () {
    function Mower(x, y, orientationLabel) {
        this._position = new Pos_1.Pos(x, y);
        if (orientationLabel === 'N') {
            this._orientation = Orientation_1.Orientation.NORTH;
        }
        else if (orientationLabel === 'E') {
            this._orientation = Orientation_1.Orientation.EAST;
        }
        else if (orientationLabel === 'S') {
            this._orientation = Orientation_1.Orientation.SOUTH;
        }
        else if (orientationLabel === 'W') {
            this._orientation = Orientation_1.Orientation.WEST;
        }
        else {
            throw new Error("Input format error");
        }
    }
    Object.defineProperty(Mower.prototype, "position", {
        get: function () {
            return this._position;
        },
        set: function (position) {
            this._position = position;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mower.prototype, "orientation", {
        get: function () {
            return this._orientation;
        },
        set: function (orientation) {
            this._orientation = orientation;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mower.prototype, "instructions", {
        get: function () {
            return this._instructions;
        },
        set: function (instructions) {
            this._instructions = instructions;
        },
        enumerable: true,
        configurable: true
    });
    Mower.prototype.addInstructions = function (instructions) {
        this._instructions = instructions;
    };
    Mower.prototype.runInstructions = function (lawn) {
        for (var i = 0; i < this._instructions.length; i++) {
            switch (this._instructions[i]) {
                case 'L':
                    this.turnLeft();
                    break;
                case 'R':
                    this.turnRight();
                    break;
                case 'F':
                    if (this.isValidMove(lawn))
                        this.moveForward();
                    break;
                default:
                    console.log("Input Format Error");
            }
        }
        lawn.addObstacles(this);
    };
    Mower.prototype.printStatus = function () {
        console.log(this.position.x + ' ' + this.position.y + ' ' + this.orientation);
    };
    Mower.prototype.isValidMove = function (lawn) {
        this.moveForward();
        if (this.position.x > lawn.width || this.position.x < 0) {
            this.traceBackward();
            return false;
        }
        else if (this.position.y > lawn.height || this.position.y < 0) {
            this.traceBackward();
            return false;
        }
        else {
            for (var _i = 0, _a = lawn.obstacles; _i < _a.length; _i++) {
                var obstacle = _a[_i];
                if (this.position.x == obstacle.position.x && this.position.y == obstacle.position.y) {
                    this.traceBackward();
                    return false;
                }
            }
            this.traceBackward();
            return true;
        }
    };
    Mower.prototype.turnRight = function () {
        switch (this._orientation) {
            case Orientation_1.Orientation.EAST:
                this._orientation = Orientation_1.Orientation.SOUTH;
                break;
            case Orientation_1.Orientation.SOUTH:
                this._orientation = Orientation_1.Orientation.WEST;
                break;
            case Orientation_1.Orientation.WEST:
                this._orientation = Orientation_1.Orientation.NORTH;
                break;
            case Orientation_1.Orientation.NORTH:
                this._orientation = Orientation_1.Orientation.EAST;
                break;
        }
    };
    Mower.prototype.turnLeft = function () {
        switch (this._orientation) {
            case Orientation_1.Orientation.EAST:
                this._orientation = Orientation_1.Orientation.NORTH;
                break;
            case Orientation_1.Orientation.NORTH:
                this._orientation = Orientation_1.Orientation.WEST;
                break;
            case Orientation_1.Orientation.WEST:
                this._orientation = Orientation_1.Orientation.SOUTH;
                break;
            case Orientation_1.Orientation.SOUTH:
                this._orientation = Orientation_1.Orientation.EAST;
                break;
        }
    };
    Mower.prototype.moveForward = function () {
        switch (this._orientation) {
            case Orientation_1.Orientation.EAST:
                this._position.x++;
                break;
            case Orientation_1.Orientation.SOUTH:
                this._position.y--;
                break;
            case Orientation_1.Orientation.WEST:
                this._position.x--;
                break;
            case Orientation_1.Orientation.NORTH:
                this._position.y++;
                break;
        }
    };
    Mower.prototype.traceBackward = function () {
        switch (this._orientation) {
            case Orientation_1.Orientation.EAST:
                this._position.x--;
                break;
            case Orientation_1.Orientation.SOUTH:
                this._position.y++;
                break;
            case Orientation_1.Orientation.WEST:
                this._position.x++;
                break;
            case Orientation_1.Orientation.NORTH:
                this._position.y--;
                break;
        }
    };
    return Mower;
}());
exports.Mower = Mower;
//# sourceMappingURL=Mower.js.map