var player;
var canas;
var obstacle1,obstacle2,obstacle3;
var track;
var trackimg;
var playerimg;
var obstacle1img,obstacle2img,obstacle3img;
var ran,rand,rando;
function preload(){
  trackimg = loadImage("track.png");
  playerimg = loadImage("car1.png");
} 
function setup(){
  console.log(ran);
canvas = createCanvas(displayWidth,displayHeight);
track = createSprite(displayWidth/2,displayHeight*1.5,50,50);
track.addImage("ieggieei",trackimg);
track.scale = 5;
track.velocityY = 3;
player = createSprite(displayWidth/2-50,displayHeight-200,50,50);
player.addImage("fofoj",playerimg);
obstacle1img = loadImage("car2.png");
obstacle2img = loadImage("car3.png");
obstacle3img = loadImage("car4.png");
}
function draw(){
  if(keyDown("LEFT_ARROW")){
    player.velocityX = -3;
  }
  if(keyDown("RIGHT_ARROW")){
    player.velocityX = 3;
  }
  if(track.height/2 === displayHeight/2){
    track.y = displayHeight*1.5;
  }
 if(frameCount%60 ===0){
  ran = random(displayWidth/2-500,displayWidth/2+500);
  console.log(ran);
  rand = random(displayWidth/2-500,displayWidth/2+500);
  rando = random(displayWidth/2-500,displayWidth/2+500);


   obstacle1 = createSprite(ran,displayHeight/displayHeight,50,50);
   obstacle1.addImage("ufguu",obstacle1img);
   obstacle1.velocityY = 5
   obstacle1.lifetime = -1 
   obstacle2 = createSprite(rando,displayHeight/displayHeight,50,50);
   obstacle2.addImage("ufguu",obstacle2img);
   obstacle2.velocityY = 5
   obstacle2.lifetime = -1 
   obstacle3 = createSprite(rand,displayHeight/displayHeight,50,50);
   obstacle3.addImage("ufguu",obstacle3img);
   obstacle3.velocityY = 5
   obstacle3.lifetime = -1 
 }
 if(isTouching(player,obstacle1)){
   obstacle1.velocityY = 0;
 }

drawSprites();

}
function isTouching(box1,box2){
  if (player.x - obstacle1.x < obstacle1.width/2 + player.width/2
    && obstacle1.x - player.x < obstacle1.width/2 + player.width/2
    &&player.y - obstacle1.y < obstacle1.height/2 + player.height/2
  && obstacle1.y - player.y < obstacle1.height/2 + player.height/2){
      obstacle1.velocityY = 0;
}


}