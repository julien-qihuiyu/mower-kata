import { Pos } from "./Pos";
import { Orientation } from "./enum/Orientation";
import { Move } from "./enum/Move";
import { Lawn } from "./Lawn";

class Mower {
    private _position: Pos;
    private _orientation: Orientation;
    private _instructions: String;

    constructor(x: number, y: number, orientationLabel: String) {
       this._position = new Pos(x, y);

       if (orientationLabel === 'N') {
            this._orientation = Orientation.NORTH;
       } else if (orientationLabel === 'E') {
            this._orientation = Orientation.EAST;
       } else if (orientationLabel === 'S') {
            this._orientation = Orientation.SOUTH;
       } else if (orientationLabel === 'W') {
           this._orientation = Orientation.WEST;
       } else {
           throw new Error("Input format error");
       }

    }

    get position() {
        return this._position;
    }

    set position(position: Pos) {
        this._position = position;
    }

    get orientation() {
        return this._orientation;
    }

    set orientation(orientation: Orientation) {
        this._orientation = orientation;
    }

    get instructions() {
        return this._instructions;
    }

    set instructions(instructions: String) {
        this._instructions = instructions;
    }

    addInstructions(instructions: String) {
        this._instructions = instructions;
    }

    runInstructions(lawn: Lawn) {
        for (let i = 0; i < this._instructions.length; i++) {
            switch (this._instructions[i]) {
                case 'L':
                    this.turnLeft();
                    break;
                case 'R':
                    this.turnRight();
                    break;  
                case 'F':
                    if (this.isValidMove(lawn)) this.moveForward();
                    break; 
                default:
                    console.log("Input Format Error"); 
            }
            
        }
        lawn.addObstacles(this);
    }

    printStatus(){
        console.log(this.position.x + ' ' + this.position.y + ' ' + this.orientation);
    }

    isValidMove(lawn: Lawn) {
        this.moveForward();
        if (this.position.x > lawn.width || this.position.x < 0) {
            this.traceBackward();
            return false;
        } else if (this.position.y > lawn.height || this.position.y < 0) {
            this.traceBackward();
            return false;
        } else {
            for (let obstacle of lawn.obstacles) {
                if (this.position.x == obstacle.position.x && this.position.y == obstacle.position.y) {
                    this.traceBackward();
                    return false;
                }
            }
            this.traceBackward();
            return true;
        }
    } 

    turnRight() {
        switch(this._orientation) {
            case Orientation.EAST:
                this._orientation = Orientation.SOUTH;
                break;
            case Orientation.SOUTH:
                this._orientation = Orientation.WEST;
                break;
            case Orientation.WEST:
                this._orientation = Orientation.NORTH;
                break;
            case Orientation.NORTH:
                this._orientation = Orientation.EAST;
                break;
        }
    }

    turnLeft() {
        switch(this._orientation) {
            case Orientation.EAST:
                this._orientation = Orientation.NORTH;
                break;
            case Orientation.NORTH:
                this._orientation = Orientation.WEST;
                break;
            case Orientation.WEST:
                this._orientation = Orientation.SOUTH;
                break;
            case Orientation.SOUTH:
                this._orientation = Orientation.EAST;
                break;
        }
    }

    moveForward() {
        switch(this._orientation) {
            case Orientation.EAST:
                this._position.x++;
                break;
            case Orientation.SOUTH:
                this._position.y--;
                break;
            case Orientation.WEST:
                this._position.x--;
                break;
            case Orientation.NORTH:
                this._position.y++;
                break;
        }
    }

    traceBackward() {
        switch(this._orientation) {
            case Orientation.EAST:
                this._position.x--;
                break;
            case Orientation.SOUTH:
                this._position.y++;
                break;
            case Orientation.WEST:
                this._position.x++;
                break;
            case Orientation.NORTH:
                this._position.y--;
                break;
        }
    }
}

export { Mower }