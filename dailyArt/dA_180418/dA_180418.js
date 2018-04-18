// Daily Art: Continuous Bubbles (April 18th 2018)
// By Stevie Bales
// Created using Exercise 8-5 by Daniel Shiffman, Learning Processing


var bubbles = []; // array of Bubble objects

function setup() {
    createCanvas(windowWidth, windowHeight);
    fill(255, 55);
    stroke(255, 85);

    //create i bubbles
    for (var i = 0; i < 50; i++) {
        bubbles.push(new Bubble());
    }
}

function draw() {
    background(50, 89, 100);
    for (var i = 0; i < bubbles.length; i++) {
        // Draw the bubbles
        bubbles[i].display();
        //Move the bubbles up the screen
        bubbles[i].move();
    }

    if (mouseIsPressed) {
        if (mouseButton === LEFT) {
            for (var i = 0; i < bubbles.length; i++) {
                // Draw the bubbles
                bubbles[i].display();
                //Move the bubbles up the screen
                bubbles[i].move();
            }
        }
        if (mouseButton === RIGHT) {
            for (var i = 0; i < bubbles.length; i++) {
                bubbles[i].pop();
            }

        }
    }
}

// the Bubbles
function Bubble() {
    this.x = random(windowWidth);
    this.y = height;
    this.diameter = random(5, 60);

    this.move = function () {
        this.y = this.y + random(-1, -3);
        this.x = this.x + random(1, -1);
        // Reset bubbles to the bottom
        if (this.y < 0 - this.y) {
            this.y = height + this.y;
        }
    };

    this.display = function () {
        ellipse(this.x, this.y, this.diameter, this.diameter);
    };

    this.pop = function () {
        fill(255, 0);
        stroke(255, 00);
        background(50, 89, 100);
    };
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
