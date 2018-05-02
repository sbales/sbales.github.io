// Ball constuctor
function Ball(tempX, tempY, tempW) {
  this.x = tempX;  // x location of ball 
  this.y = tempY;  // y location of ball 
  this.w = tempW;  // speed of ball 
  this.speed = 0;  // size

  this.display = function() {
    // Display the ball 
    fill(175); 
    stroke(0); 
    ellipse(this.x, this.y, this.w, this.w);
  }

  this.update = function() {
    // Add speed to location
    this.y = this.y + this.speed; 

    // Add gravity to speed
    this.speed = this.speed + gravity; 

    // If ball reaches the bottom 
    // Reverse speed 
    if (this.y > height) { 
      this.speed = this.speed * -0.95;
    }
  }
}
