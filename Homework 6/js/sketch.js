var ninjaObjects;
var result, runresult, runleftresult, jumpresult;
var rock;
function preload() {
  result = loadStrings('assets/characteridle.txt');
  runresult = loadStrings('assets/characterrun.txt');
  runleftresult = loadStrings('assets/characterrunleft.txt');
  jumpresult = loadStrings('assets/characterjump.txt');

}

function setup() {
    createCanvas(800,600);  
    ninjaObjects = createSprite(300, 250);
    ninjaObjects.addAnimation('idle', result[0], result[result.length-1]);
    ninjaObjects.addAnimation('run', runresult[0], runresult[runresult.length-1]);
    ninjaObjects.addAnimation('runleft', runleftresult[0], runleftresult[runleftresult.length-1]);
    ninjaObjects.addAnimation('jump', jumpresult[0], jumpresult[jumpresult.length-1]);


    rock = createSprite(700, 300);
    //compact way to add an image
    rock.addImage(loadImage('assets/rock.png'));
}

// display all the frames using the draw function as a loop
function draw() 
{
    background(120);
   
    if(keyDown('d'))
    {
      ninjaObjects.changeAnimation('run');
      ninjaObjects.velocity.x += .5;
      if(ninjaObjects.collide(rock))
      {
        ninjaObjects.changeAnimation('idle');
      }
    }
    else
    {
      ninjaObjects.changeAnimation('idle');
      ninjaObjects.velocity.x = 0;
    }

    ninjaObjects.debug = mouseIsPressed;
    rock.debug = mouseIsPressed;
    drawSprites();

    if(keyDown('a'))
    {
      ninjaObjects.changeAnimation('runleft');
      ninjaObjects.velocity.x += .5;
      if(ninjaObjects.collide(rock))
      {
        ninjaObjects.changeAnimation('idle');
      }
    }
    else
    {
      ninjaObjects.changeAnimation('idle');
      ninjaObjects.velocity.x = 0;
    }

    ninjaObjects.debug = mouseIsPressed;
    rock.debug = mouseIsPressed;
    drawSprites();

    if(keyDown('w'))
    {
      ninjaObjects.changeAnimation('jump');
      ninjaObjects.velocity.x += .5;
      if(ninjaObjects.collide(rock))
      {
        ninjaObjects.changeAnimation('idle');
      }
    }
    else
    {
      ninjaObjects.changeAnimation('idle');
      ninjaObjects.velocity.x = 0;
    }

    ninjaObjects.debug = mouseIsPressed;
    rock.debug = mouseIsPressed;
    drawSprites();
}