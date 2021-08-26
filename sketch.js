
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball
var wall_1
var wall_2
var ground


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	wall_1 = new Wall(450,670,5,34)
	wall_2 = new Wall(550,670,5,34)
	ground = new Wall(400,690,800,5)

	var options = {
		restitution: 0.9,
		frictionAir: 0.1
	}
	ball = Bodies.circle(100,685,15,options);
	World.add(world,ball)
	rectMode(CENTER);
	ellipseMode(RADIUS);

	Engine.run(engine);
  
}


function draw() {
  background(51);
  
  ground.show();
  wall_1.show();
  wall_2.show();
  
  Engine.update(engine);
 
  ellipse(ball.position.x,ball.position.y,15)
}

function rightForce(){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.02,y:0})
  }
function keyPressed(){
	if(keyCode == RIGHT_ARROW){
		rightForce();
	}
}



