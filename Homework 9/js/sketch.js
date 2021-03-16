// create two variables for textures 
let mikita;
let bruno;

// create a variable for the model
let skull;

let shapeArray = [];
// create two variables for the translation positions
var boxTranslationX = -100;
var boxTranslationY = -100;

// this function will ensure the assets are loaded prior to setup
function preload() {
  mikita = loadImage('assets/mikita.jpg');
  bruno = loadImage('assets/bruno.jpg');
  skull = loadModel('assets/Skull.obj', true);
}

// create the canvas of 800 width by 600 height
function setup() {
  createCanvas(800, 600, WEBGL);

  // add two simple shapes to the simple shape array
  shapeArray.push(new shapeclass("box", 15, 15, 15, boxTranslationX, boxTranslationY, 0.02, 0.03, 0, mikita));
  shapeArray.push(new shapeclass("cylinder", 80, 90, 0, 200, 20, 0.01, 0.01, 0, mikita));
}

function draw() {

  background(200);
  normalMaterial();
  // this is required to make sure the custom shape will be textured
  image(mikita);

  // display the simple shapes
  for (var i = 0; i < shapeArray.length; i++) {
    shapeArray[i].draw(frameCount);
  }

  // add a textured cone
  push();
  translate(-300, -200);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(mikita);
  cone(100, 70);
  pop();

  // add a textured ellipsoid
  push();
  translate(-250, -150);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(mikita);
  ellipsoid(30, 40, 140);
  pop();

  // add a textured torus
  push();
  translate(450, -150);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(mikita);
  torus(30, 15);
  pop();

  // add a texture model
  push();
  scale(0.5); // Scaled to make model fit into canvas
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(bruno);
  model(skull);
  pop();

  // change the location of the box
  if (mouseIsPressed) {
    boxTranslationX = 0;
    boxTranslationY = 0;
    boxTranslationX = floor(random(600));
    boxTranslationY = floor(random(400));
  }
}