var backgroundImg, cat, mouse, catImg,mouseImg,catImg2,mouseImg2,catImg3,mouseImg3;
function preload() {
    //load the images here
    backgroundImg = loadImage("images/garden.png");
    catImg = loadAnimation("images/cat1.png");
    mouseImg = loadAnimation("images/mouse1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    catImg3 = loadAnimation("images/cat4.png");
    mouseImg3 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(870,650);
    cat.setCollider("rectangle",0,0,100,100);
    mouse = createSprite(200,650);
    mouse.setCollider("rectangle",0,0,100,100);
    cat.addAnimation("Tom",catImg);
    mouse.addAnimation("Jerry",mouseImg);
   cat.scale = 0.3
   mouse.scale = 0.3
   cat.debug = true;
   mouse.debug = true;

}

function draw() {

    background(backgroundImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x<(cat.width/2+mouse.width/2)){
    cat.velocityX = 0;
    cat.addAnimation("Happy",catImg3);
    mouse.addAnimation("Searchy",mouseImg3);
    cat.changeAnimation("Happy",catImg3);
    mouse.changeAnimation("Searchy",mouseImg3);
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
    mouse.addAnimation("Teasy",mouseImg2);
    mouse.changeAnimation("Teasy",mouseImg2);
}   cat.addAnimation("Angry",catImg2);
    cat.changeAnimation("Angry",catImg2);
    cat.velocityX = -2;

}
