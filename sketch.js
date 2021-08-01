var sea,ship,ship_going,edges;

function preload(){
seaImage=loadImage("sea.png");
ship_going=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(600,400);

  sea=createSprite(200,180,400,20);
  sea.addImage(seaImage)
  sea.scale=0.3

  ship = createSprite(50,160,20,50)
  ship.addAnimation("going" ,ship_going)
  ship.scale=0.25

  
}

function draw() {
  background("0");
  sea.velocityX=-4;

if(sea.x < 0){
  sea.x=sea.width/8;
}

 drawSprites();
}