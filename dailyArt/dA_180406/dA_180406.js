//Generative Type #1
//By Stevie Bales
//Based on P_3_0_01 by Generative Gestaltung – Creative Coding in Web

/**
 * changing the size and the position of a letter
 *
 * MOUSE
 * position x          : size
 * position y          : position
 * drag                : draw
 *
 * KEYS
 * a-z                 : change letter
 * ctrl                : save png
 */
'use strict';

var font = 'serif';
var letter = 'A';
var s = second();

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  fill(255);

  textAlign(LEFT, TOP);
  textSize(10);
  fill (255);
  text('Press a letter key to change the display', 10, 10);

  textAlign(LEFT, TOP);
  textSize(10);
  fill (255);
  text('Press & release "control" + "shift" to save', 10, 25);

  textAlign(LEFT, TOP);
  textSize(10);
  fill (255);
  text('Press "backspace" or "delete" to clear the screen', 10, 40);
}

function mouseMoved() {
  clear();
  background(0);
  fill(255);

  textAlign(LEFT, TOP);
  textSize(10);
  fill (255);
  text('Press a letter key to change the display', 10, 10);

  textAlign(LEFT, TOP);
  textSize(10);
  fill (255);
  text('Press & release "control" + "shift" to save', 10, 25);

  textAlign(LEFT, TOP);
  textSize(10);
  fill (255);
  text('Press "backspace" or "delete" to clear the screen', 10, 40);


  textFont(font);
  textAlign(CENTER, CENTER);

  textSize((mouseX - width / 4) * 5 + 1);
  text(letter, width / 2, mouseY);
}

function mouseDragged() {
  textSize((mouseX - width / 2) * 5 + 1);
  fill(mouseY/2*5, mouseX/9*2, 0);
  text(letter, width / 2, mouseY);
}

function keyReleased() {
  if (keyCode === CONTROL) 
  {
    textAlign(CENTER, CENTER);
    textSize(10);
    fill (255);
    text('www.steviebales.com', windowWidth/2, windowHeight/2);
    saveCanvas('steviebales_generativeArt#3', 'png');
  }
}

function keyTyped() {
  letter = key;
}

function keyPressed() {
  if (keyCode === DELETE || keyCode === BACKSPACE) {
    clear();
    background(0);
    fill(255);

    textAlign(LEFT, TOP);
    textSize(10);
    fill (255);
    text('Press a letter key to change the display', 10, 10);

    textAlign(LEFT, TOP);
    textSize(10);
    fill (255);
    text('Press & release "control" + "shift" to save', 10, 25);

    textAlign(LEFT, TOP);
    textSize(10);
    fill (255);
    text('Press "backspace" or "delete" to clear the screen', 10, 40);
  }
}
