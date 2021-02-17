// Define all the arrays that will hold my objects
var ninjaObjects = [];
var ninjaRunObjects = [];
var ninjaRunLeftObjects = [];
var ninjaJumpObjects = [];
var currentObjects;

// Define all the arrays that will hold the images
var animation = [];
var runanimation = [];
var leftrunanimation = [];
var jumpanimation = [];
var currentAnimation;

// Define all the variables that will hold the strings read in from a file
var result;
var runresult;
var runresultleft;
var jumpresult;

// Define the variable that will iterate over the animation and objects
var counter = 0;

// Define the variable that will be used when creating an interval
var myInterval;

// Define a variable for to slow the movement animations down
var index = 0;

// Read in all the files and populate the string arrays from the assets folder
function preload() 
{
  result = loadStrings('assets/characteridle.txt');
  runresult = loadStrings('assets/characterrun.txt');
  runresultleft = loadStrings('assets/characterrunleft.txt');
  jumpresult = loadStrings('assets/characterjump.txt');

}

function setup() 
{

  createCanvas(800, 600);

  // create all the idle objects and set the animation array too
  for (var i = 0; i < result.length; i++) 
  {
    ninjaObjects.push(new imageclass('assets/' + result[i], 0, 0));
    animation[i] = ninjaObjects[i].getImage();
  }

  // create both movement to the right and left and the animations in this for loop
  for (var i = 0; i < runresult.length; i++) 
  {
    ninjaRunObjects.push(new imageclass('assets/' + runresult[i], 0, 0));
    runanimation[i] = ninjaRunObjects[i].getImage();
    ninjaRunLeftObjects.push(new imageclass('assets/' + runresultleft[i], 0, 0));
    leftrunanimation[i] = ninjaRunLeftObjects[i].getImage();

  }

  // assign the idle objects to the generic object variable
  currentObjects = ninjaObjects;

  // create an interval for the idle animation
  myInterval = setInterval(incrementIndex, 50);
}

// display all the frames using the draw function as a loop
function draw() 
{

  background(120);

  // check to see if any keys have been pressed
  if (keyIsPressed) 
  {
    // stop the idle interval
    clearInterval(myInterval);
    // set the variable to null - we will check for this later
    myInterval = null;

    // use this if statement to slow the movement animations
    index++;
    if (index > 3) 
    {
      incrementIndex();
      index = 0;
    }

    // move to the right
    if (key == "d") 
    {
      
      // assign the generic animation and object variables
      currentAnimation = runanimation;
      currentObjects = ninjaRunObjects;

      // make sure we don't go over the size of the arrays
      // keep in mind the idle has 10 and the movement has 8
      if (counter >= currentAnimation.length) 
      {
        counter = 0;
      }

      // move the animation by updating the x component
      currentObjects[counter].setX(currentObjects[counter].getX() + 2);

      // make sure you you assign the x component of the left movement too
      for (var i = 0; i < ninjaRunLeftObjects.length; i++)
      {
        ninjaRunLeftObjects[i].setX(currentObjects[0].getX());
      }
        

      // make sure the movement object is assigned to the current object again
      ninjaRunObjects = currentObjects;

      // this just the opposite of the above.  The character moves to the left here instead
    } 
    else if (key == "a") 
    {

      currentAnimation = leftrunanimation;
      currentObjects = ninjaRunLeftObjects;

      if (counter >= currentAnimation.length) 
      {
        counter = 0;
      }
      currentObjects[counter].setX(currentObjects[counter].getX() - 2);

      for (var i = 0; i < ninjaRunObjects.length; i++)
      {
        ninjaRunObjects[i].setX(currentObjects[0].getX());
      }
        

      ninjaRunLeftObjects = currentObjects;
    }

    for (var i = 0; i < ninjaObjects.length; i++)
      ninjaObjects[i].setX(currentObjects[0].getX());

  } 
  if (key == "w") 
  {
    
    // assign the generic animation and object variables
    currentAnimation = jumpanimation;
    currentObjects = ninjaJumpObjects;

    // make sure we don't go over the size of the arrays
    // keep in mind the idle has 10 and the movement has 8
    if (counter >= currentAnimation.length) 
    {
      counter = 0;
    }

    // move the animation by updating the x component
    currentObjects[counter].setX(currentObjects[counter].getX() + 2);

    // make sure you you assign the x component of the left movement too
    for (var i = 0; i < ninjaJumpObjects.length; i++)
    {
      ninjaJumpObjects[i].setX(currentObjects[0].getX());
    }
      

    // make sure the movement object is assigned to the current object again
    ninjaJumpObjects = currentObjects;

  // this last part just checks for the idle and resets the animations
    if (myInterval == null) 
    {
      myInterval = setInterval(incrementIndex, 50);
    }
    currentObjects = ninjaObjects;
    currentAnimation = animation;
  }

  // display the images regardless of the movement or idle
  image(currentAnimation[counter], currentObjects[counter].getX(), currentObjects[counter].getY());

}

function incrementIndex() 
{
  // increment the index
  counter += 1;
  // if we reach the end of the array, start over
  if (counter >= currentObjects.length) 
  {
    counter = 0;
  }
}