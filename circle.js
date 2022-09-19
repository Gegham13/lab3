class Circle {
    constructor(vectorCenter, numberRadius) {
        this.center = vectorCenter;
        this.radius = numberRadius;

    }
    get x() {
        return this.center.x;
    }

    set x(value) {
        this.center.x = value;
    }

    get y() {
        return this.center.y;
    }

    set y(value) {
        this.center.y = value;
    }
}