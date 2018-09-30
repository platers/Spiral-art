var da = 0.01;
var dr = 0.02;

function setup(){
    createCanvas(800, 800);
    frameRate(10);

    noFill();
    var a = 0;
    var r = 5;
    for(var i = 0; i < 30000; i++){
        strokeWeight(Math.random() * 10);
        beginShape();
        a -= da;
        r -= dr;
        for(var j = 0; j < 4; j++){
            var x = r * cos(a);
            var y = r * sin(a);
            a += da;
            r += dr;
            curveVertex(x + width / 2, y + height / 2);
        }
        a -= 2 * da;
        r -= 2 * dr;
        endShape();
    }
}

function draw(){
    
}