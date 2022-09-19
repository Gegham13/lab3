class Rectangle {
    constructor(vectorCenter, width, height) {
        this.center = vectorCenter;
        this.width = width;
        this.height = height;
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