"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Lawn_1 = require("./Lawn");
var Mower_1 = require("./Mower");
function main() {
    // Read input file with filestream, synchorized way
    var fs = require('fs');
    var linesArray = fs.readFileSync('./input.txt').toString().split("\n");
    console.log('input file');
    for (var i in linesArray) {
        console.log(linesArray[i]);
    }
    console.log('result');
    // get the first line of arguments and set the size of lawn
    var size = linesArray[0].split(" ");
    var lawn = new Lawn_1.Lawn(size[0], size[1]);
    var mowers = [];
    var mowerIndex = -1;
    // get the rest of lines 
    for (var i = 1; i <= linesArray.length - 1; i++) {
        var mowerParams = linesArray[i].split(" ");
        if (i % 2 != 0) {
            // lines for setting up initial positions of mower
            if (isValidStartPoint(parseInt(mowerParams[0]), parseInt(mowerParams[1]), lawn)) {
                var currentMower = new Mower_1.Mower(parseInt(mowerParams[0]), parseInt(mowerParams[1]), mowerParams[2]);
                mowers.push(currentMower);
                mowerIndex++;
            }
            else {
                console.log("Invalid initial position, mower skipped");
                i++;
            }
        }
        else {
            // lines for setting up and running instructions 
            mowers[mowerIndex].addInstructions(mowerParams[0]);
            mowers[mowerIndex].runInstructions(lawn);
            mowers[mowerIndex].printStatus();
        }
    }
}
/**
 * Helper function to verify that the input is valid:
 * 1) inside the lawn area
 * 2) not collide with exisiting mowers
 * @param x
 * @param y
 * @param lawn
 */
function isValidStartPoint(x, y, lawn) {
    if (x > lawn.width || x < 0 || y > lawn.height || y < 0)
        return false;
    for (var _i = 0, _a = lawn.obstacles; _i < _a.length; _i++) {
        var obstacle = _a[_i];
        if (x == obstacle.position.x && y == obstacle.position.y) {
            // console.log("Collision start point!");
            return false;
        }
    }
    return true;
}
main();
//# sourceMappingURL=main.js.map