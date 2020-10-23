var fixedRect, movingRect

function setup() {
  createCanvas(1200,400);
  fixedRect = createSprite(600, 200, 50, 50);
  fixedRect.shapeColor = "green";
  fixedRect.debug = "true";
  movingRect = createSprite(400,400,60,70)
  movingRect.shapeColor = "green";
  movingRect.debug = "true";
}

function draw() {
  background("black");  
  console.log(movingRect.x - fixedRect.x)
  console.log(movingRect.x - fixedRect.x)
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

if (movingRect.x - fixedRect.x  < fixedRect.width/2 + movingRect.width/2 &&
  fixedRect.x - movingRect.x  < fixedRect.width/2 + movingRect.width/2 && 
  movingRect.y - fixedRect.y  < fixedRect.height/2 + movingRect.height/2 &&
  fixedRect.y - movingRect.y  < fixedRect.height/2 + movingRect.height/2){
    
  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "red";
}
else{
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
}
  drawSprites();

}