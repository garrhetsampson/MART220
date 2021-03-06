var ninjaObjects;
var result, runresult, runresultleft, attackresult;
var rock;
const particles = [];
var health = 100;

function preload() {
  result = loadStrings('assets/characteridle.txt');
  runresult = loadStrings('assets/characterrun.txt');
  runresultleft = loadStrings('assets/characterrunleft.txt');
  attackresult = loadStrings('assets/characterattack.txt');
  
}

function setup() {
    createCanvas(800,600);  
    ninjaObjects = createSprite(300, 250);
    ninjaObjects.addAnimation('idle', result[0], result[result.length-1]);
    ninjaObjects.addAnimation('run', runresult[0], runresult[runresult.length-1]);
    ninjaObjects.addAnimation('left', runresultleft[0], runresultleft[runresultleft.length-1]);
    ninjaObjects.addAnimation('attack', attackresult[0], attackresult[attackresult.length-1]);

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
      if(rock != null)
      {
        if(ninjaObjects.collide(rock))
        {
          ninjaObjects.changeAnimation('idle');
        }
      }
      
    }
    else if(keyDown('a'))
    {
      ninjaObjects.changeAnimation('left');
      ninjaObjects.velocity.x -= .5;
      if(rock != null)
      {
        if(ninjaObjects.collide(rock))
        {
          ninjaObjects.changeAnimation('idle');
        }
      }
      
    }
    else if(keyDown('x'))
    {
      ninjaObjects.changeAnimation('attack');
     
      if(rock != null)
      {
        if(dist(ninjaObjects.position.x,ninjaObjects.position.y,rock.position.x,rock.position.y) < 250)
        {
          createParticles(rock.position.x, rock.position.y);
          health -= 1;
          if(health <= 0)
          {
            rock.remove();
            rock = null;
          }
       
        }
      }
      
      
    }
    else
    {
      ninjaObjects.changeAnimation('idle');
      ninjaObjects.velocity.x = 0;
    }

    ninjaObjects.debug = mouseIsPressed;
  
    drawSprites();
}

function createParticles(x,y)
{
for (let i = 0; i < 5; i++) {
    let p = new Particle(x,y);
    particles.push(p);
  }
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();
    if (particles[i].finished()) {
      // remove this particle
      particles.splice(i, 1);
    }
  }
}