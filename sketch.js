//var PLAY = 1;
//var END = 0;
//var gameState = PLAY;
var ground;
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var food,obstacle;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
   createCanvas(400, 400);

  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x = ground.width/2;
  console.log(ground.x);
  FoodGroup=new Group();
  obstacleGroup=new Group(); 
}


function draw() {
background("");
   ground.x = ground.width /2;
  if(keyDown("space")&& monkey.y >= 150) {
        monkey.velocityY = -12;
        }
  monkey.velocityY = monkey.velocityY + 0.8 
  monkey.collide(ground);
  
  foods();
  obstacles();
  drawSprites();
}

function foods(){
  
   if (frameCount % 60 === 0) {
    food=createSprite(120,120,40,10);
    food.y = Math.round(random(80,120));
    food.addImage(bananaImage);
    food.scale = 0.1;
    food.velocityX = -3;
    
     //assign lifetime to the variable
    food.lifetime = 200;
    
     //add each food to the group
    FoodGroup.add(food);
 
}
}
function obstacles(){
  
   if (frameCount % 60 === 0) {
      obstacle = createSprite(350,315,40,10);
     obstacle.y = Math.round(random(315,350));
     obstacle.addImage(obstacleImage);
     obstacle.scale = 0.1;
     obstacle.velocityX = -3;
    
     //assign lifetime to the variable
     obstacle.lifetime = 200;
    
    //add each  obstacle to the group
     obstacleGroup.add(obstacle);
  
}
}