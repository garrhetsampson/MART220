var mainColor =  800;

function setup() {
    createCanvas(800, 600);
    background(120);
    frameRate(25);
    noStroke(4);
    rectMode(CENTER);
}
function draw() {
    fill(random(mainColor),random(mainColor),random(mainColor), random(100));

    var size= random(200);
    var size2= random(200);
    square(random(width), random(height), size, size2);
    
    size= random(100);
    size2= random(100);
    rect(random(width), random(height), size, size2);
	
    size= random(40);
    size2= random(40);
    arc(random(width), random(height), size,size2, 0, HALF_PI);

    if (frameCount % 2 == 0) {
        mainColor = 255 - mainColor; // 255 0 255 0 255 0 ..
    }
	
	//saveFrames("myMovie",".png",1,25);

    if (frameCount > 50) { // 2 second * 25 fps = 25
        noLoop();
    }
}