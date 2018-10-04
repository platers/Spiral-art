var s = function(sketch){
    var da = 0.01;
    var dr = 0.02;

    sketch.setup = function(){
        sketch.createCanvas(800, 800);
        //sketch.noLoop();
        //drawSpiral(null)

    };

    // sketch.drawSpiral = function(widths){
    //     sketch.loadPixels();
    //     sketch.noFill();
    //     var a = 0;
    //     var r = 5;
    //     for(var i = 0; i < 30000; i++){
    //         sketch.strokeWeight(1);
    //         sketch.beginShape();
    //         a -= da;
    //         r -= dr;
    //         for(var j = 0; j < 4; j++){
    //             var x = r * cos(a);
    //             var y = r * sin(a);
    //             a += da;
    //             r += dr;
    //             sketch.curveVertex(x + width / 2, y + height / 2);
    //         }
    //         a -= 2 * da;
    //         r -= 2 * dr;
    //         sketch.endShape();
    //     }
    // };
    sketch.draw = function(){
        sketch.loadPixels();
        sketch.noFill();
        var a = 0;
        var r = 5;
        for(var i = 0; i < 30000; i++){
            sketch.strokeWeight(sketch.widths[i]);
            sketch.beginShape();
            a -= da;
            r -= dr;
            for(var j = 0; j < 4; j++){
                var x = r * sketch.cos(a);
                var y = r * sketch.sin(a);
                a += da;
                r += dr;
                sketch.curveVertex(x + sketch.width / 2, y + sketch.height / 2);
            }
            a -= 2 * da;
            r -= 2 * dr;
            sketch.endShape();
        }
        console.log("Drawing...");
        canvasUpdated = true;
    };

    sketch.getPixels = function(){
        sketch.loadPixels();
        var d = sketch.pixelDensity();
        return d;
    };
}
