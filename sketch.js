var canvas;
var music;
var ball,s1,s2,s3,s4;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
s1=createSprite(50,580,200,30);
s1.shapeColor="red";
s2=createSprite(220,580,200,30);
s2.shapeColor="blue";
s3=createSprite(400,580,200,30);
s3.shapeColor="yellow";
s4=createSprite(600,580,200,30);
s4.shapeColor="green";
ball=createSprite(random(20,700),50,20,20);
ball.shapeColor="black";
ball.velocityX=3;
ball.velocityY=3;
edges=createEdgeSprites();


    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
ball.bounceOff(edges);

if(ball.isTouching(s1)&&ball.bounceOff(s1)){
    ball.velocityX=0;
    ball.velocityY=0;
    music.play();
    ball.shapeColor="red";

   
}
if(ball.isTouching(s2)&&ball.bounceOff(s2)){
    ball.velocityX=0;
    ball.velocityY=0;
    music.play();
    ball.shapeColor="blue";
   
}
if(ball.isTouching(s3)&&ball.bounceOff(s3)){
    ball.velocityX=0;
    ball.velocityY=0;
    music.play();
    ball.shapeColor="yellow";

   
}
if(ball.isTouching(s4)&&ball.bounceOff(s4)){
    ball.velocityX=0;
    ball.velocityY=0;
    music.play();
    ball.shapeColor="green";

   
}
    drawSprites();

}
