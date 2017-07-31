var count;

function setup() {
    createCanvas(600, 400);
    count = 1;
}

function draw() {
    background(101);
    noFill();
    // add .001 to fix drawing arc from PI to PI
    end = map(sin(toRadians(count)), -1, 1, 0, TWO_PI);
    if (end<PI) {
        console.log('hello');
        arc(300, 200, 80, 80, end, PI);
    } else if (end > PI) {
        arc(300, 200, 80, 80, PI, end);
    }
    else {
        console.log('why');
    }
    count++;
}

function toRadians(degrees) {
    return degrees * TWO_PI / 360;
}
