
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  
}



function setup() {
  createCanvas = (200, 200);
  
  monkey = createSprite (120, 350, 40, 40); 
  monkey.addAnimation("running", monkey_running);
  monkey.scale=0.1;

  ground = createSprite ()
  
 ground = createSprite(200,400,400,20);
  ground.x = ground.width /2;
  
  
  







}


function draw() {
background(191, 157, 132)

  
  if (keyDown("space")){
    
    monkey.velocityY= -2;
  }
  
  monkey.velocityY=monkey.velocityY+0.2;
  
  
  
  
  drawSprites();
}






