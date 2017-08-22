var count;
spacing = 15;

function setup() {
    createCanvas(600, 400);
    count = 1;
    number = 5;
    bows = [];
    bow = new Bow();
    bows.push(bow)
}

function draw() {
    background(101);
    noFill();

    for (i=0; i<bows.length; i++) {
        bows[i].display(i);
    }
    if (bows.length <= number) {
        if (count % 20 == 0) {
            bow = new Bow();
            bows.push(bow);
        }
    }
    count++;
}

function toRadians(degrees) {
    return degrees * TWO_PI / 360;
}

function Bow() {

    this.lifespan = 0;
    this.rev = 0;

    this.display = function(r) {
        end = map(sin(toRadians(this.lifespan)), -1, 1, 0, TWO_PI);
        strokeWeight(1);
        stroke(map(end, 0, TWO_PI, 0, 255));
        if (end<PI) {
            arc(width/2, height/2, (r+1)*spacing, (r+1)*spacing, end, PI);
        } else if (end > PI) {
            arc(width/2, height/2, (r+1)*spacing, (r+1)*spacing, PI, end);
        }
        if (abs(end-PI)<.01) {
            this.rev++;
        }
        this.lifespan++;
    }

}

