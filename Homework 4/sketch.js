var ninja;
var animation = [];
var runanimation = [];
var ninjaObjects = [];
var ninjaRunObjects = [];
var i = 0;
var j = 0;
var x = 0;
var counter = 0;

function preload() {

    // CHALLENGE - can you make it so we don't have to copy and paste all this?
    
    // Idle
    ninja = new imageclass('assets/Idle__000.png', 0, 0);
    ninjaObjects[0] = ninja;
    ninja = new imageclass('Idle__001.png', 0, 0);
    ninjaObjects[1] = ninja;
    ninja = new imageclass('Idle__002.png', 0, 0);
    ninjaObjects[2] = ninja;
    ninja = new imageclass('Idle__003.png', 0, 0);
    ninjaObjects[3] = ninja;
    ninja = new imageclass('Idle__004.png', 0, 0);
    ninjaObjects[4] = ninja;
    ninja = new imageclass('Idle__005.png', 0, 0);
    ninjaObjects[5] = ninja;
    ninja = new imageclass('Idle__006.png', 0, 0);
    ninjaObjects[6] = ninja;
    ninja = new imageclass('Idle__007.png', 0, 0);
    ninjaObjects[7] = ninja;
    ninja = new imageclass('Idle__008.png', 0, 0);
    ninjaObjects[8] = ninja;
    ninja = new imageclass('Idle__009.png', 0, 0);
    ninjaObjects[9] = ninja;

    for (var i = 0; i < ninjaObjects.length; i++) {
        animation[i] = ninjaObjects[i].getImage();
        
    }

    // Run
    ninja = new imageclass('assets/Run__000.png', 0, 0);
    ninjaRunObjects[0] = ninja;
    ninja = new imageclass('assets/Run__001.png', 0, 0);
    ninjaRunObjects[1] = ninja;
    ninja = new imageclass('assets/Run__002.png', 0, 0);
    ninjaRunObjects[2] = ninja;
    ninja = new imageclass('assets/Run__003.png', 0, 0);
    ninjaRunObjects[3] = ninja;
    ninja = new imageclass('assets/Run__004.png', 0, 0);
    ninjaRunObjects[4] = ninja;
    ninja = new imageclass('assets/Run__005.png', 0, 0);
    ninjaRunObjects[5] = ninja;
    ninja = new imageclass('assets/Run__006.png', 0, 0);
    ninjaRunObjects[6] = ninja;
    ninja = new imageclass('assets/Run__007.png', 0, 0);
    ninjaRunObjects[7] = ninja;
    ninja = new imageclass('assets/Run__008.png', 0, 0);
    ninjaRunObjects[8] = ninja;
    ninja = new imageclass('assets/Run__009.png', 0, 0);
    ninjaRunObjects[9] = ninja;

    for (var j = 0; j < ninjaObjects.length; j++) {
        animation[j] = ninjaObjects[j].getImage();
        
    }

    // Attack
    ninja = new imageclass('assets/Attack__000.png', 0, 0);
    ninjaRunObjects[0] = ninja;
    ninja = new imageclass('assets/Attack__001.png', 0, 0);
    ninjaRunObjects[1] = ninja;
    ninja = new imageclass('assets/Attack__002.png', 0, 0);
    ninjaRunObjects[2] = ninja;
    ninja = new imageclass('assets/Attack__003.png', 0, 0);
    ninjaRunObjects[3] = ninja;
    ninja = new imageclass('assets/Attack__004.png', 0, 0);
    ninjaRunObjects[4] = ninja;
    ninja = new imageclass('assets/Attack__005.png', 0, 0);
    ninjaRunObjects[5] = ninja;
    ninja = new imageclass('assets/Attack__006.png', 0, 0);
    ninjaRunObjects[6] = ninja;
    ninja = new imageclass('assets/Attack__007.png', 0, 0);
    ninjaRunObjects[7] = ninja;
    ninja = new imageclass('assets/Attack__008.png', 0, 0);
    ninjaRunObjects[8] = ninja;
    ninja = new imageclass('assets/Attack__009.png', 0, 0);
    ninjaRunObjects[9] = ninja;    

    for (var x = 0; x < ninjaObjects.length; x++) {
        animation[x] = ninjaObjects[x].getImage();
        
    }

}

// create the canvas
function setup() {

    createCanvas(641, 542);
    setInterval(incrementIndex, 50);
}

// display all the frames using the draw function as a loop
function draw() {

    background(120);

    // draw each frame based on the index in the array
    if(keyIsPressed)
    {
        if(key == "d")
        {
            // continue to display the image
            image(runanimation[j], ninjaRunObjects[j].getX(), ninjaRunObjects[j].getY());
            // this section slows the running right
            counter++;
            if(counter > 5)
            {
                // increment the index "j"
                incrementRunIndex();
                // restart our counter
                counter = 0;
            }   
        }
        if(key == "s")
        {
            // continue to display the image
            image(runanimation[j], ninjaRunObjects[j].getX(), ninjaRunObjects[j].getY());
            // this section slows the running down
            counter++;
            if(counter > 5)
            {
                // increment the index "j"
                incrementRunIndex();
                // restart our counter
                counter = 0;
            }   
        }
        if(key == "a")
        {
            // continue to display the image
            image(runanimation[j], ninjaRunObjects[j].getX(), ninjaRunObjects[j].getY());
            // this section slows the running left
            counter++;
            if(counter > 5)
            {
                // increment the index "j"
                incrementRunIndex();
                // restart our counter
                counter = 0;
            }   
        }
        if(key == "w")
        {
            // continue to display the image
            image(runanimation[j], ninjaRunObjects[j].getX(), ninjaRunObjects[j].getY());
            // this section slows the jumping up
            counter++;
            if(counter > 5)
            {
                // increment the index "j"
                incrementRunIndex();
                // restart our counter
                counter = 0;
            }   
        }
        if(key == "x")
        {
            // continue to display the image
            image(runanimation[x], ninjaRunObjects[x].getX(), ninjaRunObjects[x].getY());
            // this section slows the attack
            counter++;
            if(counter > 5)
            {
                // increment the index "x"
                incrementRunIndex();
                // restart our counter
                counter = 0;
            }   
        }


    }
    else
    {
        image(animation[i], ninjaObjects[i].getX(), ninjaObjects[i].getY());
    }
    

}

function incrementIndex()
{
     // increment the index
     i += 1;

     // if we reach the end of the array, start over
     if (i >= animation.length) {
         i = 0;
     }
}

function incrementRunIndex()
{

     // increment the index
     j += 1;

     // if we reach the end of the array, start over
     if (j >= runanimation.length) {
         j = 0;
     }
}