var count;

function setup() {
    createCanvas(600, 400);
    count = 1;
    number = 5;
}

function draw() {
    background(101);
    noFill();

    for (i=0; i<number; i++) {
        end = map(sin(toRadians(count)), -1, 1, 0, TWO_PI);
        if (end<PI) {
            arc(width/2, height/2, i*50, i*50, end, PI);
        } else if (end > PI) {
            arc(width/2, height/2, i*50, i*50, PI, end);
        }
    }
    count++;
}

function toRadians(degrees) {
    return degrees * TWO_PI / 360;
}


