// create all the variables

var counter = 0;
var shape1X = x+=random(50), shape1Y = y+=random(50);
var shape2X = 450, shape2Y = 150;
var shape3X = 150, shape3Y = 250;
var shape4X = 350, shape4Y = 450;
var shape5X = 250, shape5Y = 250;
var shape6X = 650, shape6Y = 150;
var shape7X = 238, shape7Y = 231;
var shape8X = 230, shape8Y = 175;
var shape9X = 550, shape9Y = 290;
var shape10X = 150, shape10Y = 250;
var redColor1, greenColor1, blueColor1;
var redColor2, greenColor2, blueColor2;
var redColor3, greenColor3, blueColor3;
var redColor4, greenColor4, blueColor4;
var redColor5, greenColor5, blueColor5;
var redColor6, greenColor6, blueColor6;
var redColor7, greenColor7, blueColor7;
var redColor8, greenColor8, blueColor8;
var redColor9, greenColor9, blueColor9;
var redColor10, greenColor10, blueColor10;
var shape1Size = 50;
var shape2Size = 90;
var shape3Sizew = 20;
var shape3Sizeh = 70;
var shape4Sizew = 120;
var shape4Sizeh = 70;
var shape5Sizew = 190;
var shape5Sizeh = 70;
var shape6Size = 90;
var shape9Sizew = 50;
var shape9Sizeh = 190;

// set up a random color initially
function setup()
{
    createCanvas(800,600);
    redColor1 = random(255);
    greenColor1 = random(255);
    blueColor1 = random(255);
    redColor2 = random(255);
    greenColor2 = random(255);
    blueColor2 = random(255);
    redColor3 = random(255);
    greenColor3 = random(255);
    blueColor3 = random(255);
    redColor4 = random(255);
    greenColor4 = random(255);
    blueColor4 = random(255);
    redColor5 = random(255);
    greenColor5 = random(255);
    blueColor5 = random(255);
    redColor6 = random(255);
    greenColor6 = random(255);
    blueColor6 = random(255);
    redColor7 = random(255);
    greenColor7 = random(255);
    blueColor7 = random(255);
    redColor8 = random(255);
    greenColor8 = random(255);
    blueColor8 = random(255);
    redColor9 = random(255);
    greenColor9 = random(255);
    blueColor9 = random(255);
    redColor10 = random(255);
    greenColor10 = random(255);
    blueColor10 = random(255);
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

    var redColor = 0;
    var greenColor = 100;
    var blueColor = 100;
    var x = 100;
    var y = 100;
    var side = 50;
    function setup()
    {
        createCanvas(800,600);
    }
    function draw()
    {

        fill(redColor,greenColor,blueColor);
        rect(x,y,side);

        // update the red section of the rgb
        switch(redColor)
        {
            case 10:
                redColor = 200;
                break;
            case 100:
                redColor = 10;
                break;
            case 200:
                redColor = 100;
                break;
          default:
                redColor = 10;
        }
    }

    fill(0);
    textSize(25);
    text("Garrhet Sampson",550,560);
    text("Simple Shape Art",50,50);

    // change the shapes and color when we hit 1000
    if(counter > 1000)
    {
        shape1X = random(100,600);
        shape1Y = random(100,500);
        shape2X = random(100,600);
        shape2Y = random(100,500);
        shape3X = random(100,600);
        shape3Y = random(100,500);
        shape4X = random(100,600);
        shape4Y = random(100,500);
        shape5X = random(100,600);
        shape5Y = random(100,500);
        shape6X = random(100,600);
        shape6Y = random(100,500);
        shape7X = random(100,600);
        shape7Y = random(100,500);
        shape8X = random(100,600);
        shape8Y = random(100,500);
        shape9X = random(100,600);
        shape9Y = random(100,500);
        shape10X = random(100,600);
        shape10Y = random(100,500);
        redColor1 = random(255);
        greenColor1 = random(255);
        blueColor1 = random(255);
        redColor2 = random(255);
        greenColor2 = random(255);
        blueColor2 = random(255);
        redColor3 = random(255);
        greenColor3 = random(255);
        blueColor3 = random(255);
        redColor4 = random(255);
        greenColor4 = random(255);
        blueColor4 = random(255);
        redColor5 = random(255);
        greenColor5 = random(255);
        blueColor5 = random(255);
        redColor6 = random(255);
        greenColor6 = random(255);
        blueColor6 = random(255);
        redColor7 = random(255);
        greenColor7 = random(255);
        blueColor7 = random(255);
        redColor8 = random(255);
        greenColor8 = random(255);
        blueColor8 = random(255);
        redColor9 = random(255);
        greenColor9 = random(255);
        blueColor9 = random(255);
        redColor10 = random(255);
        greenColor10 = random(255);
        blueColor10 = random(255);
        shape1Size = random(100);
        shape2Size = random(100);
        shape3Sizew = random(50);
        shape3Sizeh = random(100);
        shape4Sizew = random(200);
        shape4Sizeh = random(100);
        shape5Sizew = random(200);
        shape5Sizeh = random(100);
        shape6Size = random(135);
        shape9Sizew = random(100);
        shape9Sizeh = random(200);
        counter = 0;
    }
    counter++;
        // shape 1
        fill(redColor1,greenColor1,blueColor1);
        arc(shape1X,shape1Y,shape1Size);

        // shape 2
        fill(redColor2,greenColor2,blueColor2);
        square(shape2X,shape2Y,shape2Size);

        // shape 3
        fill(redColor3,greenColor3,blueColor3);
        rect(shape3X,shape3Y,shape3Sizew,shape3Sizeh);

        // shape 4
        fill(redColor4,greenColor4,blueColor4);
        rect(shape4X,shape4Y,shape4Sizew,shape4Sizeh);

        // shape 5
        fill(redColor5,greenColor5,blueColor5);
        triangle(shape5X,shape5Y,shape5Sizew,shape5Sizeh);

        // shape 6
        fill(redColor6,greenColor6,blueColor6);
        arc(shape6X, shape6Y, shape6Size, 90, 90, PI + QUARTER_PI);

        // shape 7
        fill(redColor7,greenColor7,blueColor7);
        quad(shape7X, shape7Y, 386, 220, 569, 263, 530, 276);

        // shape 8
        fill(redColor8,greenColor8,blueColor8);
        quad(shape8X, shape8Y, 158, 220, 186, 275);

        // shape 9
        fill(redColor9,greenColor9,blueColor9);
        ellipse(shape9X,shape9Y,shape9Sizew,shape9Sizeh);

        // shape 10
        stroke(redColor10,greenColor10,blueColor10);
        strokeWeight(7);
        line(shape10X, shape10Y, 185, 475);
    
}