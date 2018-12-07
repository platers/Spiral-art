var c = document.getElementById('c');
var context = c.getContext("2d");
var centerx = context.canvas.width / 2;
var centery = context.canvas.height / 2;

function draw() {
    a = 1;
    b = 1;

    context.clearRect(0, 0, 600, 600);

    context.moveTo(centerx, centery);
    var px = centerx, py = centery;
    for (i = 0; i < 7200; i++) {
        angle = 0.1 * i;
        x = centerx + (a + b * angle) * Math.cos(angle);
        y = centery + (a + b * angle) * Math.sin(angle);

        context.beginPath();
        context.moveTo(px, py);
        px = x;
        py = y;
        context.lineTo(x, y);
        context.lineWidth = Math.random() * 3;
        context.strokeStyle = "#000";
        context.stroke();
    }

}