var bullet, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);

  speed = random(55,90);
  weight = random(400,1500);

  bullet = createSprite(50, 200, 50, 10);
  wall = createSprite(1500, 200, 60, 50);
  car.velocityX = speed;

}

function draw() {
  background(0,0,0);  

  if(wall.x-car.x < (car.width+wall.width)/2)  {
    car.velocityX = 0;

    var deformation = 0.5 * weight * speed * speed/22500
    
    if(deforemation>180){
      car.shapeColor = color(255, 0, 0);
    }
    if(deformation<180 && deformation>100){
      car.shapeColor = color(230,230,0);
    }

    if(deofrmatiob<100){
      car.shapeColor=color(0,0,0);
    }
  }
  drawSprites();
}