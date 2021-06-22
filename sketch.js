var car, wall;
var speed, weight;

function setup() {
  createCanvas(1050,400);
 wall =  createSprite(1050, 200, 20, 400);
 wall.shapeColor='blue';
 car = createSprite(50, 200, 50, 50);
 speed = random(55, 90);
 weight = random (400, 1500);
 car.velocityX= speed
}

function draw() {
  background(200);  
  if (wall.x - car.x<(car.width+wall.width)/2){
    car.velocityX=0;
    var deformation = 0.5*weight*speed*speed/22500;
    if (deformation>180){
      car.shapeColor='red';
    }
    if (deformation<180 && deformation>100){
      car.shapeColor='yellow';
    }
    if (deformation<100){
      car.shapeColor='green';
    }
  }
  drawSprites();
}