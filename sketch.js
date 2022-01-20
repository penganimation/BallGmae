
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var leftSide, rightSide;

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		isStatic:false,
		restituition:0.3,
		friction:0,
		density:1
	}

	//Create the Bodies Here.
	ball = Bodies.circle(40,400,20,ball_options);
	World.add(world, ball);

	ground = new Ground(width/2,670,width,20);

	leftSide = new Ground(1100,600,20,120);
	rightSide = new Ground(1400,600,20,120);

	Engine.run(engine);
	ellipseMode(RADIUS);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ellipse(ball.position.x,ball.position.y,20,20);

  ground.display();
  leftSide.display();
  rightSide.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:17,y:-13})
	}
}



