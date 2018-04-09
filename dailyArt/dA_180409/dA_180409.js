//Generative Image#1
//By Stevie Bales
//Based on P_4_0_01 by Generative Gestaltung – Creative Coding in Web
//Photo by Luis Alfonso Orellana

/**
 * draw a grid of streched copies of an image
 *
 * MOUSE
 * position x           : tile count horizontally
 * position y           : tile count vertically
 *
 * KEYS
 * s                    : save png
 */
'use strict';

var img;

function preload() {
  img = loadImage('data/image.jpg');
}

function setup() {
  background(0);
}

function draw() {
  createCanvas(650, 450);
  var tileCountX = mouseX / 3 + 1;
  var tileCountY = mouseY / 3 + 1;
  var stepX = width / tileCountX;
  var stepY = height / tileCountY;
  for (var gridY = 0; gridY < height; gridY += stepY) {
    for (var gridX = 0; gridX < width; gridX += stepX) {
      tint(255, 127);
      image(img, gridX, gridY, stepX, stepY);
    }
  }
}

function mouseDragged() {
  background(mouseX, mouseY, (mouseX*3/2));
}

function keyReleased() {
  if (keyCode == 's' || 'S') 
  {
    textAlign(CENTER, CENTER);
    textSize(10);
    fill (255);
    text('www.steviebales.com', windowWidth/2, windowHeight/2);
    saveCanvas('steviebales_generativeArt#3', 'png');
  }
}
