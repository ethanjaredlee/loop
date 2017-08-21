var count;

function setup() {
    createCanvas(600, 400);
    count = 1;
    number = 5;
    bows = [];
}

function draw() {
    background(101);
    noFill();

    for (i=0; i<number; i++) {
        bow = new Bow();
        bows.push(bow);
        bows[i].display(i);
    }
}

function toRadians(degrees) {
    return degrees * TWO_PI / 360;
}

function Bow() {

    this.lifespan = 0;
    this.rev = 0;

    this.display = function(r) {
        end = map(sin(toRadians(this.lifespan)), -1, 1, 0, TWO_PI);
        strokeWeight(5);
        if (end<PI) {
            arc(width/2, height/2, r*50, r*50, end, PI);
        } else if (end > PI) {
            arc(width/2, height/2, r*50, r*50, PI, end);
        } else if (end == 0) {
            this.rev++;
        }
        this.lifespan++;
    }

}
