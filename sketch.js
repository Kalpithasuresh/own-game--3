var playerimg;
var monster1img;
var monster2img;
var monster3img;
var monster4img;
var monster5img;
var batteryimg1;
var batteryimg2;
var monster1,monster2,monster3,monster4,monster5;
var player;
var chargedBattery,dischargedBattery;
var edges;




function preload(){
  playerimg = loadImage("assets/player.png");
  monster1img = loadImage("assets/mons-1.png");
  monster2img = loadImage("assets/mons-2.png");
  monster3img = loadImage("assets/mons-3.png");
  monster4img = loadImage("assets/mons-4.png");
  monster5img = loadImage("assets/mons-5.png");
  batteryimg1 = loadImage("assets/charged battery.png");
  batteryimg2 = loadImage("assets/discharged battery.png");


}

function setup() {
  createCanvas(600, 600);

  monster1 = createSprite(538,300,50,200);
monster1.addImage(monster1img);
monster1.scale=0.2;

monster2 = createSprite(40,130,50,550);
monster2.addImage(monster2img);
monster2.scale = 0.2;

monster3 = createSprite(400,10,400,550);
monster3.addImage(monster3img);
monster3.scale = 0.2;

monster4 = createSprite(150,550,400,550);
monster4.addImage(monster4img);
monster4.scale = 0.2;

monster5 = createSprite(250,230,50,550);
monster5.addImage(monster5img);
monster5.scale = 0.2;

player = createSprite(300,300,200,400);
player.addImage(playerimg);
player.scale = 0.1;
  

edges = createEdgeSprites() 


}


function draw() {
  background(200);


  if(keyIsDown(RIGHT_ARROW)){
    player.x = player.x+0.5;

  }

  if(keyIsDown(LEFT_ARROW)){
    player.x = player.x-.5;
  }

  if(keyIsDown(DOWN_ARROW)){
    player.y = player.y+0.5;
  }

  if(keyIsDown(UP_ARROW)){
    player.y = player.y-0.5;
  }
   

  player.bounceOff(edges);
  monster1.bounceOff(edges);
  monster2.bounceOff(edges);
  monster3.bounceOff(edges);
  monster4.bounceOff(edges);
  monster5.bounceOff(edges);
  

  if(frameCount % 60 == 0){
    random1=Math.round(random(1,4));
    console.log(random1);

    if(random1 === 1){
      monster1.velocityY=random(0,-1);
      monster2.velocityX=random(0,-1);
      monster3.velocityX=random(0,1);
      monster4.velocityY=random(0,1);
      monster5.velocityX=random(0,-1);
      

    }
    else if(random1 === 2){
      monster1.velocityY=random(0,1);
      monster2.velocityX=random(0,1);
      monster3.velocityX=random(0,-1);
      monster4.velocityY=random(0,-1);
      monster5.velocityX=random(0,1);

    }

    else if(random1 === 3){
      monster1.velocityX=random(0,1);
      monster2.velocityY=random(0,-1);
      monster3.velocityY=random(0,1);
      monster4.velocityX=random(0,-1);
      monster5.velocityY=random(0,-1);
    }

    else{
      monster1.velocityX=random(0,-1);
      monster2.velocityY=random(0,1);
      monster3.velocityY=random(0,-1);
      monster4.velocityX=random(0,1);
      monster5.velocityY=random(0,1);
    }

     
  }

    battery();
    drawSprites();


 }

 function battery(){
   if(frameCount % 100 == 0){

    var k = Math.round(random(2,7))


    for (var i=0 ; i<k ; i++ ){

      for (var j=0 ; j<k ; j++){
    
        chargedBattery = createSprite(i * random(100,200),j * random(100,200),10,10);
        if(i%2==0){
          chargedBattery.addImage(batteryimg1);
          chargedBattery.scale = 0.05
        }
        else{
          chargedBattery.addImage(batteryimg2);
          chargedBattery.scale = 0.05;
        }
        
      }
    }
    

   }

 }

