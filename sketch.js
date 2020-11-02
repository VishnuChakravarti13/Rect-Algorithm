var rect1, rect2;

function setup() {
  createCanvas(800,400);
 rect1 = createSprite(500, 100, 50, 50);
 rect1.shapeColor = "blue";
 rect2 = createSprite(400, 200, 60, 60);
 rect2.shapeColor = "red";
}

function draw() {
  background(0);  
  rect1.x = mouseX;
  rect1.y = mouseY;
  if(rect1.x - rect2.x < rect1.width/2 + rect2.width/2 && 
    rect2.x - rect1.x < rect1.width/2 + rect2.width/2 &&
    rect1.y - rect2.y < rect1.height/2 + rect2.height/2 && 
    rect2.y - rect1.y < rect1.height/2 + rect2.height/2  ){
    rect1.shapeColor = "white";
    rect2.shapeColor = "white";
  }
  else{
    rect1.shapeColor = "blue";
    rect2.shapeColor = "red";
  };
  drawSprites();

}