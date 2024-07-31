var canvas;

function windowResized () {
 resizeCanvas(windowWidth, windowHeight);
}


// add more her


// video source: https://pin.it/3Q9jhNQ
let img;
let vid;
let theta = 0;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight, WEBGL);
    canvas.position(0,0);
    canvas.style('position', 'fixed');
    canvas.style('z-index', '-10');
  pg = createGraphics(200, 200);
  pg.textSize(75);
  img = loadImage('bones.gif');
  vid = createVideo(['birthday.mp4']);
  vid.elt.muted = true;
  vid.loop();
  vid.hide();
  textSize(32);
  text('word', 10, 30);
  fill(0, 102, 153);
}

function draw() {
  background(50,10,220);
  ambientLight(250); // white light
  ambientMaterial(280, 127, 80); // coral material
  sphere(50);
  translate(-300, 0, 0);
  push();
  ambientLight(250); // white light
  ambientMaterial(170, 127, 80);
  push();
  rotateZ(theta * mouseX * 0.001);
  rotateX(theta * mouseX * 0.001);
  rotateY(theta * mouseY * 0.001);
  //pass image as texture
  pg.background(20,225);
  pg.text('hello!', 50, 600);
  texture(pg);
  ambientLight(250); // white light
  ambientMaterial(0, 127, 80);
  cone(180);
  pop();
  translate(440, 0, 0);
  push();
  rotateZ(theta * 0.1);
  rotateX(theta * 0.1);
  rotateY(theta * 0.1);
  texture(img);
  torus(100,70);
  pop();
  theta += 0.05;
  rotateY(millis() / 1000);
  
  const m = 30;

  const topR = 1000 * noise(frameCount / m);
  const topG = 1000 * noise(1000 + frameCount / m);
  const topB = 1000 * noise(2000 + frameCount / m);
  const bottomR = 255 * noise(3000 + frameCount / m);
  const bottomG = 255 * noise(4000  + frameCount / m);
  const bottomB = 255 * noise(5000 + frameCount / m);

  const topColor = color(topR, topG, topB);
  const bottomColor = color(bottomR, bottomG, bottomB);

  for(let y = 0; y < height; y++) {
    const lineColor = lerpColor(topColor, bottomColor, y / height);

    stroke(lineColor);
    line(0, y, width, y);
    
}
}