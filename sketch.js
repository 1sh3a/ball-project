
function setup() {
  createCanvas(400,400);
  var ball = createSprite(100,100,50,50)
  
}





function draw() 

{
  background(30);

  if(keyIsDown(RIGHT_ARROW)){
  
    ball.position.x= ball.position.x+4;
  }

  if(keyIsDown(LEFT_ARROW)){
  
    ball.position.x= ball.position.x-4;

  }
  drawSprites();
}




