var cat,catImage1,catImage2,catImage3;
var mouse,mouseImage1,mouseImage2,mouseImage3;
var bgImage;
function preload() {
    //load the images here

 bgImage=loadImage("images/garden.png");
 catImage=loadAnimation("images/cat1.png")
catImage2=loadAnimation("images/cat2.png","images/cat3.png")
catImage3=loadAnimation("images/cat4.png")
mouseImage=loadAnimation("images/mouse1.png")
mouseImage2=loadAnimation("images/mouse2.png","images/mouse3.png")
mouseImage3=loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(800,600);
    //create tom and jerry sprites here
 cat=createSprite(700,400,20,20);
 cat.addAnimation("cat",catImage);
cat.scale=0.1;
mouse=createSprite(200,400,20,20);
mouse.addAnimation("mouse",mouseImage)
mouse.scale=0.1;
}

function draw() {

    background(bgImage);
    //Write condition here to evalute if tom and jerry collide

    if (cat.isTouching(mouse)){
cat.velocityX=0;
cat.x=300;
cat.addAnimation("catImg",catImage3);
cat.changeAnimation("catImg");
mouse.addAnimation("mouseImg",mouseImage3)
mouse.changeAnimation("mouseImg");

}








    drawSprites();
}


function keyPressed(){
if (keyCode===LEFT_ARROW){
cat.velocityX=-5
cat.addAnimation("catRunning",catImage2);
cat.changeAnimation("catRunning");
mouse.addAnimation("mouseMoving",mouseImage2)
mouse.changeAnimation("mouseMoving");

}
  


}
