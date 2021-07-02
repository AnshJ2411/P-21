var bullet;
var wall;
var speed;
var weight;
var thickness;


function setup() {


  createCanvas(800,400);
  thickness=random(22,83)
  speed=random(223,321);
  weight=random(30,40);

  bullet=createSprite(50,200,50,50)
  bullet.velocityX=speed;
  
  wall=createSprite(650,200,30,height/2);
  wall.shapeColor="black";
}



function draw() {
  background("skyblue");  

  if(collided(bullet,wall)){
    bullet.velocityX=0
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
    if(damage>10){
      wall.shapeColor="red"
    }
    if(damage<10){wall.shapeColor="green"}
  }

  drawSprites();

  textSize(25);
  fill("black");
  text("GCSO",300,50);

}
function collided(b,w){
bulletRightEdge=b.x+b.width
wallLeftEdge=w.x
if(bulletRightEdge>wallLeftEdge){
  return true
}
return false
}