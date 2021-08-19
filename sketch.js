var tower,towerImg;
var DoorImg,DoorsGroup,Door;
var climber,climberImg,ClimbersGroup;
var ghostImg,ghost;
var invisibleBlockGroup,invisibleblock;


var gameState="Play";


function preload() {
  towerImg=loadImage ("tower.png");
  DoorImg=loadImage ("door.png");
  climberImg=loadImage ("climber.png");
  ghostImg=loadImage ("ghost-standing.png");
  
  spookySound=loadSound ("spooky.wav");
  
}



function setup () {
createCanvas(displayHeight-20,displayWidth-30);
  spookySound.loop ();

tower=createSprite (300,300);
tower.addImage ("tower",towerImg);
tower.velocityY=1;
  
DoorsGroup=new Group ();
ClimbersGroup=new Group ();
invisibleBlockGroup=new Group ();
  
ghost=createSprite (200,200,50,50);
ghost.scale=0.3;
ghost.addImage ("ghost",ghostImg);

  



}



function draw (){

background (0);

     
camera.position.x=displayWidth/2;
camera.position.y=ghost.y   
  
  if (gameState==="Play"){
    
    
  if (keyDown("left_arrow")){
    ghost.x=ghost.x-3;
    
    
    
  }
    
       if (keyDown("right_arrow")){
    ghost.x=ghost.x+3;
    
    
  }
    
      if (keyDown("space")){
    ghost.velocityY=-10;
    
    
  }

    
      ghost.velocityY=ghost.velocityY+0.8;
    
    
  
  
  if (tower.y>400 ){
    tower.y=300;
  }
    
        spawnDoor();

  
 
  
  
    

  
 
  
  if (ClimbersGroup.isTouching (ghost)){
  
  ghost.velocityY=0;
    
  
  }
  
  if (invisibleBlockGroup.isTouching (ghost)||ghost.y>600){
    ghost.destroy();
    gameState="end";
  }
  
  

  
  drawSprites ();
  }
  
  if (gameState=== "end"){
    stroke("white");
    fill("white");
    textSize (30);
    text ("Game Over",230,250);
  }






}

function spawnDoor (){
 
      if (frameCount %240===0){

      Door =createSprite (200,-50);
      climber=createSprite (200,10);
      invisibleblock=createSprite(200,15);
        
        invisibleblock.width=climber.width;
        
        invisibleblock.height=2;

        Door.x = Math.round (random (120,400));
        climber.x=Door.x;
        invisibleblock.x=Door.x;
        invisibleblock.velocityY=1;

        Door.addImage ("Door",DoorImg);
        climber.addImage ("climber",climberImg);

      Door.velocityY = 1;
      climber.velocity=1;
        
        ghost.depth=Door.depth;
       ghost.depth+=1;
      

       Door.lifetime =800 ;
       climber.lifetime=800;
        invisibleblock.lifetime=800;

        DoorsGroup.add (Door);
        invisibleblock.debug=true;
        ClimbersGroup.add (climber);
       invisibleBlockGroup.add (invisibleblock);
    
    
   
    
    
  }
  

}

