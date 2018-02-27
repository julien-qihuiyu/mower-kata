class Pos {
    private _x: number;
    private _y: number;

    constructor(x: number, y:number) {
        if (x < 0 || y < 0) {
            throw new Error("Invalid position number");
        }
        this._x = x;
        this._y = y;
    }


    get x() {
        return this._x;
    }

    set x(x: number) {
        this._x = x;
    }

    get y() {
        return this._y;
    }

    set y(y: number) {
        this._y = y;
    }
}

export{Pos};