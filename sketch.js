var sea,ship;
var seaImg,shipImg;

function preload(){
  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation("boat.png","boat1.png",
                            "boat1.png","boat.png");
}

function setup(){
  createCanvas(400,400);
  background("blue");

  // Moving background
  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX = -5;
  sea.scale=0.3;

  
  ship = createSprite(130,220,30,30);
  ship.addAnimation("movingShip",shipImg1);
  ship.scale =0.5;
  
}

function draw() {
  background(0);
  sea.velocityX = -3;

  
  //code to reset the background
  if(sea.x < 0){
    sea.x = sea.width/8;
  }
    
  drawSprites();
}