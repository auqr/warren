var player;
var enemy;
var enemy2;
var platform;
var platform2;
var score = 0;
var rocket;
var rocket2;
var rocket3;
var coin_image
var coin_image2
var glow;
var backround_image;





const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	rocket = loadImage("images/rocket1.png");
	rocket2 = loadImage("images/rocketboosting.png");
	rocket3 = loadImage("images/rocket3.png");
	coin_image = loadImage("images/coin.png");
	coin_image2 = loadImage("images/coin.png");
	backround_image = loadImage("images/space.png");
	
}

function setup() {
	createCanvas(800, 700);

	platform=createSprite(100,350,150,25);
	platform2=createSprite(300,200,150,25);
	glow=createSprite(200,200,100,25);
	platform.velocityY = 2;
	platform2.velocityY = 2;
	glow.velocityY = 2;
	
	player=createSprite(100,30,30,30);

	//player.addImage(rocket);
	player.scale = 0.2;





	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backround_image);
  

   
  player.collide(platform);
  player.collide(platform2);

  if (keyWentDown(UP_ARROW)) {
	player.addImage(rocket2)
}
  
  if (keyWentUp(UP_ARROW)) {
	  player.addImage(rocket)
  }

  if (keyWentDown(DOWN_ARROW)) {
	  player.addImage(rocket3)
  }

  if (keyWentUp(DOWN_ARROW)) {
	player.addImage(rocket)
}

if (player.isTouching(glow)) {
	score = score -1;
}


fill("blue");
text("Score:"+score,30,30)

if(player.isTouching(platform)) {
	platform.velocityY = 0;
	platform2.velocityY = 0;
	glow.velocityY = 0;
	enemy.velocityY = 0;
	enemy2.velocityY = 0;
	
}

if(platform.velocityY = 0) {
	text("GAME OVER",100,100);

}



 
  
  SpawnPlatform();
  controlPlayer();
  drawSprites();
 
}


function SpawnPlatform() {

	

	if(platform.y>=700) {
		
		platform.y= -10;
		platform.x= Math.round(random(1,800));
		platform.shapeColor = "pink";
		//enemy=createSprite(platform.x,platform.y-30,40,40);
		enemy=createSprite(Math.round(random(1,800)),platform.y-30,40,40);
		enemy.x = enemy.x - 2;
		enemy.velocityY = 2;
		enemy.shapeColor = "red";
		score = score+1
		enemy.addImage(coin_image);
		enemy.scale = 0.1

		
	}



	if(platform2.y>700) {
		platform2.y= -10;
		platform2.x= Math.round(random(1,800));
		platform2.shapeColor = "pink";
		enemy2=createSprite(Math.round(random(1.800)),platform2.y-30,40,40);
		enemy2.velocityY = 2;
		score = score+1
		//if(player.isTouching(enemy2)) {
			score = score+1
		//enemy2.visible = false;
			enemy2.addImage(coin_image2)
			enemy2.scale = 0.1

		}

		if(glow.y>700) {
			glow.y= -10;
			glow.x= Math.round(random(1,800));
			glow.shapeColor = "purple"
			score = score+3
		}
	}
	
	



function controlPlayer() {

	if(keyDown(UP_ARROW)) {
		player.velocityY = -6;

	}

	if(keyDown(DOWN_ARROW)) {
		player.velocityY = 0;
		player.velocityX = 0;
	}

	if(keyDown(LEFT_ARROW)) {
		player.velocityX = -4;
	}

	if(keyDown(RIGHT_ARROW)) {
		player.velocityX = 4;
	}

	player.velocityY = player.velocityY + 0.5;

	
}






