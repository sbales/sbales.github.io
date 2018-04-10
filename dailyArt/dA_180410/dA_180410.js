// Daily Art: TV Static (April 10th 2018)
// By Stevie Bales
// Based on Exercise 6-8: Create a grid of squares (each colored randomly) by Daniel Shiffman "Learning Processing"

/**
 Using the mouse, change the colors of each grided square to create a pixelated design
 
 MOUSE
 position X
 position Y
 
 KEY
 s: saves png
 
 */

'use strict';

var theColor1 = 0;
var theColor2 = 0;
var theColor3 = 0;
var v1 = 0;
var v2 = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor();
}


function draw() {
  v1 = mouseX+20;
  v2 = mouseY-50;
  theColor1 = ((random(0, 255)), (dist(mouseX, mouseY, gridX, gridY)), (dist(mouseX, mouseY, width/2, height/2)));

  theColor2 = int(v1+v2);
  theColor3 = int(v2-v1);

  for (var gridX = 0; gridX < width; gridX +=10) {
    for (var gridY = 0; gridY < height; gridY +=10) {
      fill(random(theColor1), theColor2, theColor3);
      noStroke();
      rect(gridX, gridY, 10, 10);
    }
  }
}

function keyReleased() {
    if (keyCode == 's' || 'S') {
        textAlign(CENTER, CENTER);
        textSize(10);
        fill(255);
        text('www.steviebales.com', windowWidth / 2, windowHeight / 2);
        saveCanvas('steviebales_tvStatic', 'png');
    }
}
