// Bubble constuctor
function Bubble() {
  this.x = random(width);  // x location of Bubble 
  this.y = height-this.d;  // y location of Bubble 
  this.d = random(5, 70);  // diameter Bubble
  this.speed = 1; //speed of bubble

  this.display = function() {
    // Display the Bubble 
    fill(100); 
    stroke(0); 
    ellipse(this.x, this.y, this.d, this.d);
  }
  
  this.ascend = function(){
      this.y = this.y + random(-1,-3);
      this.x = this.x +random(3,-3);
  }
}
