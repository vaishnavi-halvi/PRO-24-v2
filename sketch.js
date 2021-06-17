
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   ground=new Ground()
   paper=new Paper()
   box=new Box()

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(CENTER);
  background(0);
  ground.display()
  box.display()
  paper.display()

  drawSprites();
 
}

function keyPressed(){
  if(keyCode===DOWN_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:180,y:-105})
  }
}



