var player,obstacle1

function bounceoff(){
    if (player.x - obstacle1.x < obstacle1.width/2 + player.width/2
      && obstacle1.x - player.x < obstacle1.width/2 + player.width/2) {
    player.velocityX = player.velocityX * (-1);
    obstacle1.velocityX = obstacle1.velocityX * (-1);
  }
  if (player.y - obstacle1.y < obstacle1.height/2 + player.height/2
    && obstacle1.y - player.y < obstacle1.height/2 + player.height/2){
    player.velocityY = player.velocityY * (-1);
    obstacle1.velocityY = obstacle1.velocityY * (-1);
  }
  }

  function isTouching(box1,box2){
    if (player.x - obstacle1.x < obstacle1.width/2 + player.width/2
      && obstacle1.x - player.x < obstacle1.width/2 + player.width/2
      &&player.y - obstacle1.y < obstacle1.height/2 + player.height/2
    && obstacle1.y - player.y < obstacle1.height/2 + player.height/2){
        return true;
  }else{
      return false;
  }

}