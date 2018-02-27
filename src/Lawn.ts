import { Mower } from "./Mower";
class Lawn {
    _width: number;
    _height: number;
    _obstacles: Mower[] = [];

    constructor(width: number, height:number) {
       this._width = width;
       this._height = height;
    }

    get width() {
        return this._width;
    }

    set width(width: number) {
        this._width = width;
    }

    get height() {
        return this._height;
    }

    set height(height: number) {
        this._height = height;
    }

    get obstacles() {
        return this._obstacles;
    }

    addObstacles(mower: Mower) {
        this._obstacles.push(mower);
    }
}

export { Lawn }