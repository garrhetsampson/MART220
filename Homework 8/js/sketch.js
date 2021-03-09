var x = 0;
var y = 0;

function setup() {
  createCanvas(800, 600, WEBGL);
}

// display all the frames using the draw function as a loop
function draw() {
  background(120);
  normalMaterial();

  createSphere(150, 150, 150, -100, -100, true);
  createTorus();
  createTorus2();
  createTorus3();
  createBox(50, 50, 50, 350, 50, true);
  if (keyIsPressed) {
    if (key == 'd') { // move the right
      x += 5;

    } else if (key == 'a') { // move to the left

      x -= 5;

    } else if (key == 'w') { // move up
      y += 5;

    } else if (key == 's') { // move down

      y -= 5;

    }	  
  }
}

// this allows us to create any type of box
function createBox(w, h, d, transX, transY, move) {
  push();
  if (move) {
    translate(transX + x, transY);
  } else {
    translate(transX, transY);
  }

  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(w, h, d);
  pop();


}

// this creates a single torus
function createTorus() {
  push();
  translate(100, 100);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(50, 15, 24, 16);
  pop();
}

// this creates a second torus
function createTorus2() {
  push();
  translate(-100, -100);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(50, 15, 24, 16);
  pop();
}

// this creates a third torus
function createTorus3() {
  push();
  translate(-100, -300);
  rotateX(frameCount * -0.01);
  rotateY(frameCount * -0.01);
  torus(50, 15, 24, 16);
  pop();
}


// this creates a single sphere
function createSphere() {
    background(200);
    normalMaterial();
    translate(-100,-100);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    sphere(150);
}
