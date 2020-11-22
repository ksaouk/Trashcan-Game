const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bottomBody, leftBody, rightBody, ground;
//var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1800, 700);
	background(0,0,0);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bottomBody = Bodies.rectangle(width/1.2, 650, 200, 20, {isStatic:true});
	leftBody = Bodies.rectangle(width/1.2-100, 610, 20, 100, {isStatic:true});
	rightBody = Bodies.rectangle(width/1.2+100, 610, 20, 100, {isStatic:true});
	
	World.add(world, bottomBody);
	World.add(world, rightBody);
	World.add(world, leftBody);

	leftSprite = createSprite(width/1.2-100, 610, 20, 100);
	leftSprite.shapeColor = color("white");

	rightSprite = createSprite(width/1.2+100, 610, 20, 100);
	rightSprite.shapeColor = color("white");

	bottomSprite = createSprite(width/1.2, 650, 200, 20);
	bottomSprite.shapeColor = color("white");

	ball = new Ball(165, 200, 70);
	
	ground = new Ground(900, 650, 1800, 20);

	Engine.run(engine);

  
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  ball.display();
  ground.display();
 
  drawSprites();
 
}

function keyPressed() {
	if(keyCode === 38){
		Matter.Body.applyForce(ball.body, ball.body.poistion, {x:85, y:-85});
	}
}