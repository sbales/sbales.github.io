'use strict';

function setup() {
  createCanvas(windowWidth, windowHeight);

  noCursor();

  colorMode(HSB, 360, 100, 100);
  rectMode(CENTER);
  noStroke();
}

function draw() {
  background(mouseY / 2, windowWidth-mouseX, windowHeight-mouseY);

  fill(windowWidth/3 - mouseY/2, 100, 100, .85);
  rect(windowWidth/2, windowHeight/2, mouseX + 1, mouseX + 1);

  textAlign(LEFT, TOP);
  textSize(60);
  text('GENERATIVE ART', 10, 30);
  fill(windowWidth/3 - mouseY/2, 100, 100, .65);
  text('GENERATIVE ART', 10, 70);
  fill(windowWidth/3 - mouseY/2, 100, 100, .35);
  text('GENERATIVE ART', 10, 100);


  textAlign(RIGHT, BASELINE);
  textSize(20);
  fill(0);
  text('Press "S" to SAVE at any point', windowWidth-10, windowHeight-10);
}

function keyPressed() {
  if (key == 's' || key == 'S') 
  {
    textAlign(CENTER, CENTER);
    textSize(30);
    fill (windowWidth*3 - mouseY*2, 100, 100, .85);
    text('www.steviebales.com', windowWidth/2, windowHeight/2);
    saveCanvas('steviebales_generativeArt#1', 'png');
  }
}
