// Daily Art: Drawing the Bubbles (April 17th 2018)
// By Stevie Bales
// Created using Exercise 8-5 by Daniel Shiffman, Learning Processing

var bubbles = []; // array of Bubble objects

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(255, 55);
  stroke (255, 85);
  // Create objects
  for (var i=0; i<50; i++) {
    bubbles.push(new Bubble());
  }
}

function draw() {
  background(50, 89, 100);
  for (var i=0; i<bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].display();
  }
}

// Bubble class
function Bubble() {
  this.x = random(width);
  this.y = height;
  this.diameter = random(5, 60);
  this.speed = 2;

  this.move = function() {
    this.y = this.y + random(-1, -10);
    this.x = this.x +random(3, -3);
  };

  this.display = function() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  };
}
