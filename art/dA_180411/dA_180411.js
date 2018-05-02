// Daily Art: Moving Shape (April 11th 2018)
// By Stevie Bales
// P_2_0_02 by Creative Coding im Web

/**
 * drawing with a changing shape by draging the mouse.
 *
 * MOUSE
 * position x          : length
 * position y          : thickness and number of lines
 * drag                : draw
 *
 * KEYS
 * del, backspace      : erase
 * s                   : save png
 */
'use strict';

var circleResolution = 0;
var c1 = 50;
var c2 = 75;
var c3 = 255;

function setup() {
  createCanvas(windowWidth, windowHeight-70);
  noFill();
  background(c1, c2, c3);
  strokeWeight(2);
  stroke(0, 25);
}

function getColor() {
  if (mouseX <= 255) {
    c1 = mouseX;
  } else {
    c1 = random(0, 255);
  }

  if (mouseY <= 255) {
    c2 = mouseY;
  } else {
    c2 = random(0, 255);
  }

  if (circleResolution <= 255) {
    c3 = circleResolution;
  } else {
    c3 = random(0, 255);
  }
}

function draw() {
  if (mouseIsPressed && mouseButton == LEFT) {
    push();
    translate(width / 2, height / 2);

    var circleResolution = int(map(mouseY+100, 0, height, 2, 10));
    var radius = mouseX - width / 2 + 0.5;
    var angle = TAU / circleResolution;

    beginShape();
    for (var i = 0; i <= circleResolution; i++) {
      var x = cos(angle * i) * radius;
      var y = sin(angle * i) * radius;
      vertex(x, y);
    }
    endShape();
    pop();
  }

  if (mouseIsPressed && mouseButton == RIGHT) {
    push();
    translate(width / 2, height / 2);

    var circleResolution = int(map(mouseX+100, 0, width, 2, 10));
    var radius = mouseY - height / 2 + 0.5;
    var angle = TAU / circleResolution;

    beginShape();
    stroke(c3, c2, c1);
    for (var i = 0; i <= circleResolution; i++) {
      var x = cos(angle * i) * radius;
      var y = sin(angle * i) * radius;
      vertex(x, y);
    }
    endShape();
    pop();
  }
}

function keyPressed() {
  if (keyCode === DELETE || keyCode === BACKSPACE) {
    getColor();
    background(c1, c2, c3);
  } else if (keyCode === ENTER || keyCode === RETURN) {
    getColor();
  } 
  return false;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
