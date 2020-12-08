var car,wall
var carImage
var speed,weight
 

function preload() {

  carImage=loadImage("car.png")
  

}

function setup() {
  createCanvas(2000,400);
  car=createSprite(200, 200, 50, 50);
  wall=createSprite(1000,200,50,150)
  car.addImage(carImage)
}

function draw() {
  background('black');
  
  wall.shapeColor='red'
  car.velocityX=5
  car.scale=0.8
   
  car.collide(wall)

   
  drawSprites();
}