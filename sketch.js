var rect1, rect2;

function setup() {
  createCanvas(1000,500);
 rect1 = createSprite(500, 100, 50, 50);
 rect1.shapeColor = "blue";
 rect1.velocityY = 5;
 rect2 = createSprite(500, 800, 60, 60);
 rect2.shapeColor = "red";
 rect2.velocityY = -5;
}

function draw() {
  background(0);  
  //rect1.x = mouseX;
  //rect1.y = mouseY;
  bounceoff(rect2,rect1);
  drawSprites();
  
}































