document.body.onload = function () {
    var app = new App(1920, 1080);

    // app.onclick = function (e) {
    //     var x = e.x;
    //     var y = e.y;
    //     app.line(x, y, 'yellow')
    // }
 

    var line = new Line(new Vector(960, 540), new Vector(960, 540));
    app.onmousemove = function (e) {
        line.end.x = e.x;
        line.end.y = e.y;
    }

    //
    // var rect = new Rectangle(new Vector(app.width / 2, 100));
    var circle = new Circle(new Vector(app.width / 2, app.height / 2), 30);

    app.update = function () {

    };


    
    app.draw = function () {
        app.clearRect(0, 0, app.width, app.height)
        //  app.fillRect(rect, app.width, app.height, 'rgba(255, 255, 255, 0.3)');

        // for (var x = 0; x < 1920; x += 19.2) {
        //     for (var y = 0; y < 1080; y += 10.8) {
        //         app.strokeRect(new Vector(x, y), 19.2, 10.8, 'green');
        //     }
        // }

        app.fillCircle(circle, 'yellow');
    
        app.drawLine(line, 'red');
        // app.fillRect(rect, 100, 100, 'red')
        
        // app.line(line, 'red');


    }


};