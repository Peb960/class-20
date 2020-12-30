var movingRect , fixedRect ;


function setup() {
  createCanvas(800,800);
 fixedRect = createSprite(400, 200, 50, 50);
 movingRect = createSprite(500,500,50,50)
 movingRect.shapeColor = "Red"
 fixedRect.shapeColor = "Red"
//450-400===25+25
}

function draw() {
  background("Cyan");  
  movingRect.x = World.mouseX
  movingRect.y = World.mouseY
  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 &&
    fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2 &&
    movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2 &&
    fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2  ) {
    movingRect.shapeColor = "green"
    fixedRect.shapeColor = "green"
  } else {
    movingRect.shapeColor = "Red"
    fixedRect.shapeColor = "Red"
   
  }

  drawSprites();
}