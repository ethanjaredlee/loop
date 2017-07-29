var count;

function setup() {
    createCanvas(600, 400);
    background(51);
    count = 1;
}
function draw() {
    console.log(toRadians(count));
    noFill();
    arc(300, 200, 80, 80, 0, toRadians(count));
    count++;
    console.log(count);
}

function toRadians(degrees) {
    return degrees * TWO_PI / 360;
}
