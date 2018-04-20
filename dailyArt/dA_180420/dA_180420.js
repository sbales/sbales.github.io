// Daily Art: Blow Some Bubbles (April 20th 2018)
// By Stevie Bales
// Created using Exercise 8-5 by Daniel Shiffman, Learning Processing


var bubbles = []; // array of Bubble objects

function setup() {
    createCanvas(windowWidth, windowHeight - 100);
    fill(255, 55);
    stroke(255, 85);
    //create i bubbles
    for (var i = 0; i < 50; i++) {
        bubbles.push(new Bubble(5, 75));
    }
}

function draw() {
    background(163, 195, 255);
    for (var i = 0; i < bubbles.length; i++) {
        // Draw the bubbles
        bubbles[i].display();
        //Move the bubbles up the screen
        bubbles[i].move();
        //Pop Bubbles
        bubbles[i].pop();
    }
}

// the Bubbles
function Bubble(size1, size2) {
    this.x = random(width);
    this.y = random(height, height * 2);
    this.diameter = random(size1, size2);

    this.move = function () {
        //vertical movement  
        this.y = this.y + random(-1, -3);
        // Reset bubbles to the bottom
        if (this.y < 0 - this.y) {
            this.y = height + this.y;
        }

        //horizontal movement
        if (keyIsPressed) {
            if (keyCode === RIGHT_ARROW) {
                this.x = this.x + random(2, 0);
            }

            if (keyCode === LEFT_ARROW) {
                this.x = this.x + random(0, -2);
            }

        } else {
            this.x = this.x + random(1, -1);
        }
        //Move bubbles only through this space ONLY
        if (this.x < 0 - this.x) {
            this.x = width + this.x;
        } else if (this.x > width) {
            this.x = 0;
        }
    };

    this.display = function () {
        ellipse(this.x, this.y, this.diameter, this.diameter);
    };

    this.pop = function () {
        if (keyIsPressed) {
            if (keyCode === DELETE || keyCode === BACKSPACE) {
                fill(255, 0);
                stroke(255, 0);
                noLoop();
                background(163, 195, 255);
            }
        }

    };
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
