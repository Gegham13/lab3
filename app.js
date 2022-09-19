class App {

    constructor(width, height) {
        var self = this;
        this.canvas = document.createElement("canvas");
        this.canvas.width = width;
        this.canvas.height = height;
        this.canvasContext = this.canvas.getContext('2d');
        this.canvas.style.position = "absolute";
        this.canvas.style.width = "100%";
        this.canvas.style.height = "100%";
        document.body.style.margin = 0;
        document.body.appendChild(this.canvas);
        this.canvasContext.style = document.createElement('style');
        document.head.appendChild(this.canvasContext.style);

        this.onmousemove = function (e) { };
        this.canvas.onmousemove = function (e) {
            var v = new Vector();
            v.x = e.x * self.width / window.innerWidth;
            v.y = e.y * self.height / window.innerHeight;
            self.onmousemove(v);
        };

        this.onclick = function (e) { };
        this.canvas.onclick = function (e) {
            var v = new Vector();
            v.x = e.x * self.width / window.innerWidth;
            v.y = e.y * self.height / window.innerHeight;
            self.onclick(v);
        };

        this.update = function (deltaTime) { };
        this.draw = function (deltaTime) { };

        var then = 0;
        var fpsInterval = 60;

        function animate() {
            self.update();

            requestAnimationFrame(animate);

            let now = Date.now();
            let elapsed = now - then;

            if (elapsed > fpsInterval) {

                then = now - (elapsed % fpsInterval);

                self.draw();
            }
        }
        animate();
    }


    get width() {
        return this.canvas.width;
    }
    set width(value) {
        this.canvas.width = value;
    }
    get height() {
        return this.canvas.height;
    }

    set height(value) {
        this.canvas.height = value;
    }


    fillRect(rect, width, height, color) {
        this.canvasContext.fillStyle = color;
        this.canvasContext.fillRect(rect.x - width / 2, rect.y - height / 2, width, height);
    }

    strokeRect(rect, width, height, color) {
        this.canvasContext.strokeStyle = color;
        this.canvasContext.strokeRect(rect.x - width / 2, rect.y - height / 2, width, height);
    }

    fillCircle(circle, color) {
        this.canvasContext.fillStyle = color;
        this.canvasContext.beginPath();
        this.canvasContext.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2, true);
        this.canvasContext.fill();
    }

    strokeCircle(circle, color) {
        this.canvasContext.strokeStyle = color
        this.canvasContext.beginPath();
        this.canvasContext.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2, true);
        this.canvasContext.stroke();
    }

    clearRect(x, y, width, height) {
        this.canvasContext.clearRect(x, y, width, height);
    }


    drawLine(line, color) {
        this.canvasContext.strokeStyle = color;
        this.canvasContext.beginPath();
        // this.canvasContext.lineWidth = 20;
        this.canvasContext.moveTo(line.start.x, line.start.y);
        this.canvasContext.lineTo(line.end.x, line.end.y);
        // this.canvasContext.lineTo(line.x, line.y,);
        // this.canvasContext.lineTo(960, 500,);
        // this.canvasContext.lineTo(20, 500,);
        // this.canvasContext.lineTo(20, 100,);
        // this.canvasContext.lineTo(500, 500,);

        this.canvasContext.stroke();
    }


}