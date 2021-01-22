 function setup()
{
    createCanvas(800,600);
}

function draw()
{
    background(200);
    // upper border
    noStroke();
    fill(100,0,25);
    rect(0,0,800,25);
    // left border
    rect(0,25,25,600);
    // bottom border
    rect(25,575,800,25);
    // right border
    rect(775,25,25,600);

    fill(0);
    textSize(25);
    text("Garrhet Sampson",550,560);
    text("Simple Shape Art",50,50);

    // shape 1
    fill(255, 204, 0);
    circle(250,200,175);

    // shape 2
    strokeWeight(10);
    fill(10);
    circle(200, 180, 30, 45);
    circle(285, 180, 30, 45);

    // shape 3
    point(245,200);

    // shape 4
    square(210, 235, 30, 45)

    // shape 5
    fill(10, 24, 120);
    rect(200,285,100,150);

    // shape 6
    fill(255);
    ellipse(500,420,250,220,280,320)
    
    // shape 7
    fill(10, 24, 120);
    rect(300,295,50,10);
    
    // shape 8
    rect(150,295,50,10);
    
    // shape 9
    rect(200,500,10,50);
    
    // shape 10
    rect(290,500,10,50);

}