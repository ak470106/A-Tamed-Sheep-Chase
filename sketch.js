var farmerImgUp, farmerAniUp, farmerImgDown, farmerAniDown, farmerImgLeft, farmerAniLeft, farmerImgRight, farmerAniRight;
var foxImgUp, foxAniUp, foxImgDown, foxAniDown, foxImgLeft, foxAniLeft, foxImgRight, foxARight;
var sheepImg;
var farmer, sheep, wolf1, wolf2, wolf3, wolf4, wolf5;
var bgStory, bgL1;
var gamestate = "Name";
var nameInput, nameButton;
var missionAcceptButton;
function preload () {
  farmerAniUp = loadAnimation("assets/upright.png","assets/upstop.png","assets/upleft.png","assets/upstop.png");
  farmerImgUp = loadImage("assets/upstop.png");
  farmerAniDown = loadAnimation("assets/downright.png","assets/downstop.png","assets/downleft.png","assets/downstop.png");
  farmerImgDown = loadImage("assets/downstop.png");
  farmerAniLeft = loadAnimation("assets/leftright.png","assets/leftstop.png","assets/leftleft.png","assets/leftstop.png");
  farmerImgLeft = loadImage("assets/leftstop.png");
  farmerAniRight = loadAnimation("assets/rightright.png","assets/rightstop.png","assets/rightleft.png","assets/rightstop.png");
  farmerImgRight = loadImage("assets/rightstop.png");
  foxAniUp = loadAnimation("assets/foxup1.png","assets/foxup2.png","assets/foxup3.png","assets/foxup4.png");
  foxImgUp = loadImage("assets/rightstop.png");
  foxAniDown = loadAnimation("assets/foxdown1.png","assets/foxdown2.png","assets/foxdown3.png","assets/foxdown4.png");
  foxImgDown = loadImage("assets/rightstop.png");
  foxAniLeft = loadAnimation("assets/foxleft1.png","assets/foxleft2.png","assets/foxleft3.png","assets/foxleft4.png");
  foxImgLeft = loadImage("assets/rightstop.png");
  foxAniRight = loadAnimation("assets/foxright1.png","assets/foxright2.png","assets/foxright3.png","assets/foxright4.png");
  foxImgRight = loadImage("assets/rightstop.png");
  sheepImg = loadImage("assets/sheep.png");
  bgStory = loadImage("assets/storybg.png");
  bgL1 = loadImage("assets/level1bg.jpg");
}
function setup() {
  createCanvas(displayWidth,displayHeight);
  nameInput = createInput();
  nameInput.position(20, 65);
  nameInput.visible = false;
  nameButton = createButton("That's my name!");
  nameButton.position(20, 100);
  nameButton.visible = false;
  missionAcceptButton = createButton('Look for the sheep');
  missionAcceptButton.hide();
  missionAcceptButton.position(35,35);
  missionAcceptButton.size(100, 50);
  farmer = createSprite(width/2, height-100);
  farmer.addAnimation("up", farmerAniUp);
  farmer.addAnimation("down", farmerAniDown);
  farmer.addAnimation("left", farmerAniLeft);
  farmer.addAnimation("right", farmerAniRight);
  farmer.addAnimation("upStop", farmerImgUp);
  farmer.addAnimation("downStop", farmerImgDown);
  farmer.addAnimation("leftStop", farmerImgLeft);
  farmer.addAnimation("rightStop", farmerImgRight);
  farmer.scale = 0.5;
  farmer.visible = false;
  textSize(50);
  textAlign(CENTER);
}

function draw() {
  background(255,255,255);
  drawSprites();
  handleMousePressedName();
  if (gamestate == "Name"){
    text("Enter your name or gaming name here please.")
  }
  if(gamestate == "story"){
    background(bgStory);
    fill("white");
    textStyle(BOLD)
    textSize(37);
    text("'Farmer " + nameInput.value() + "!"+"\nThere's been a catastrophe!"+"\nThe group of foxes from the woods has stolen our prize sheep for the upcoming farm county fair!"+"\nWhat will we do now?! You must save the sheep!'",width/2,650);
    missionAcceptButton.show();
    missionAcceptButton.mousePressed(()=>{
      missionAcceptButton.hide();
      gamestate = "Level 1";
    });
  }
  if(gamestate == "Level 1"){
    background(bgL1);
    farmer.visible = true;
    if(keyDown("w")){
      farmer.changeAnimation("up");
      farmer.setVelocity(0, -3);
    }
    if(keyDown("s")){
      farmer.changeAnimation("down");
      farmer.setVelocity(0, 3);
    }
    if(keyDown("a")){
      farmer.changeAnimation("left");
      farmer.setVelocity(-3, 0);
    }
    if(keyDown("d")){
      farmer.changeAnimation("right");
      farmer.setVelocity(3, 0);
    }
    drawSprites();
  }
}
function handleMousePressedName(){
  nameButton.mousePressed(()=>{
    nameInput.hide();
    nameButton.hide();
    gamestate = "story";
  });
}
/*function keyReleased(){
  if (keyCode == "w"){
    farmer.changeAnimation("upStop");
    farmer.setVelocity(0,0);
  }
  if (keyCode == 115){
    farmer.changeAnimation("downStop");
    farmer.setVelocity(0,0);
  }
  if (keyCode == 097){
    farmer.changeAnimation("leftStop");
    farmer.setVelocity(0,0);
  }
  if (keyCode == 100){
    farmer.changeAnimation("rightStop");
    farmer.setVelocity(0,0);
  }
}*/