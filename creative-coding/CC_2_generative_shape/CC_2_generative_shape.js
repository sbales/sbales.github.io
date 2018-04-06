//Generative Shape #1
//By Stevie Bales
//Based on P_2_0_01 by Generative Gestaltung – Creative Coding im Web

/**
 * drawing a filled circle with lines.
 *
 * MOUSE
 * position x          : length
 * position y          : thickness and number of lines
 *
 * KEYS
 * s                   : save png
 */
'use strict';

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeCap(SQUARE);
  noFill();
}

function draw() {
  background(0);
  translate(width / 2, height / 2);

  var circleResolution = map(mouseY, 0, height, 20, 350);
  var radius = mouseY - width / 2 + 0.5;
  var angle = TAU / circleResolution;
  var M = minute();
  var S = second();

  strokeWeight(mouseX / 20);

  for (var i = 0; i <= circleResolution; i++) {
    var x = cos(angle * i) * radius;
    var y = sin(angle * i) * radius;
    strokeWeight(mouseX / 20);
    stroke(mouseY, mouseX, circleResolution);
    line(0, 0, x, y);

    var x = cos(angle+M * i) * radius/2;
    var y = sin(angle+S * i) * radius/2;
    strokeWeight(mouseX / 50);
    stroke(mouseX*2, M+mouseY, circleResolution/2);
    line(0, 0, x, y);
  }
}

function keyPressed() {
  if (key == 's' || key == 'S') 
  {
    textAlign(LEFT, TOP);
    textSize(10);
    fill (0);
    text('www.steviebales.com', 10, 10);
    saveCanvas('steviebales_generativeArt#2', 'png');
  }
}
