var canvas;

function windowResized () {
 resizeCanvas(windowWidth, windowHeight);
}

function setup() {
canvas = createCanvas(windowWidth, windowHeight,WEBGL);
canvas.position(0,0);
canvas.style('position', 'fixed');
canvas.style('z-index', '-10');
    background(0,200,225);
  }
  
  function draw() {
    // Call the variableEllipse() method and send it the
    // parameters for the current mouse position
    // and the previous mouse position
    variableEllipse(mouseX, mouseY, pmouseX, pmouseY);
  }
  
  // The simple method variableEllipse() was created specifically
  // for this program. It calculates the speed of the mouse
  // and draws a small ellipse if the mouse is moving slowly
  // and draws a large ellipse if the mouse is moving quickly
  
  function variableEllipse(x, y, px, py) {
    let speed = abs(x - px) + abs(y - py);
    stroke(speed);
    torus(30,speed,speed,10);
    let ellipseRed = map(mouseX, 0, width, 0, 255);
    let rectBlue = map(mouseY, 0, height, 0, 255);
      fill(ellipseRed, 200, 150);
    sphere(50,speed,60);
    fill(255, rectBlue, 200);
    cone(speed,266,speed,20,70);
  }
  