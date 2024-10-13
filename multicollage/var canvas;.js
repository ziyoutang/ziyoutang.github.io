var canvas;

function windowResized () {
 resizeCanvas(windowWidth, windowHeight);
}


// add more here


const radius = 200;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight,WEBGL);
    canvas.position(0,0);
    canvas.style('position', 'fixed');
    canvas.style('z-index', '-10');
    //createCanvas(710, 400, WEBGL);
    noStroke();
    fill(0,200,255);
    background(120,0,30);
}

function draw() {
  let speed = abs(mouseX - 20) + abs(mouseY +100)
  noStroke();
  background(120,0,30);
  circle(mouseX,mouseY,40,80);
  const dirY = (mouseY / height - 0.5) * 4;
  const dirX = (mouseX / width - 0.5) * 4;
  directionalLight(40, 204, 60, dirX, dirY, 1);
  translate(-1.5 * radius, 0, 0);
  cone(radius);
    directionalLight(100, speed, 255, dirX, speed, speed);
  translate(3 * radius, speed, 0);
  cone(radius);
  directionalLight(255, 255, 0, dirX, dirY, 1);
  translate(-1.5 * radius, 0, 0);
  torus(radius);
  directionalLight(255, 20, 60, dirX, dirY, 1);
  translate(-1.5 * radius, 0, 0);
  sphere(40);


}
