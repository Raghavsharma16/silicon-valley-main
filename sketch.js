//MAKINNG VARIABLES 


var bg,bgImage;
var handel;
var nobita,nobitaImage;
var gian,gianImage;
var gianSinging,gianSingingImage;
var teacher,teacherImage;
var kaminari,kaminariImage;
var anyWhereDoor,anyWhereDoorImage;
var bCoptor,bCoptorImage;
var border1,border2,border3,border4;
var go,goImg;
var homeBg,homeBgImg;
var dot1,dot2;
var yw,ywImage;
var bg2,bg2Img;
var kh;
var s2,s2Img;
var restart,restartImg;
var start1,start1Img;
var sb,sbImg;
var suneo,suneoImg;
var gMom,gMomImg;
var bg3,bg3Img;
var gameState = 0;
var gameState = 1;
var gameState = 2;
var gameState=3;
var dot3,dot4;
//var gameState=5;
var PLAY=1;
var END=0;
var SERVE=2;
var HOME=3;
//var L2 = 5;

//PRELOADING ALL THE IMAGES

function preload() {
bgImage=loadImage("bg.jpg");
nobitaImage=loadImage("Nobita.png");
gianImage=loadImage("gian angry.png");
gianSingingImage=loadImage("gian singing.png");
kaminariImage=loadImage("kaminari.png");
teacherImage=loadImage("teacher.png");
bCoptorImage=loadImage("bcoptor.png");
anyWhereDoorImage=loadImage("any where door.png");
goImg=loadImage("go.jpg");
ywImage=loadImage("you win.jpg");
restartImg=loadImage("restart.jpg");
homeBgImg=loadImage("bg3.jpg");
start1Img=loadImage("start.png");
suneoImg=loadImage("suneo.png");
gMomImg=loadImage("gmom.png");
bg2Img=loadImage("bg2.jpg");
sbImg=loadImage("sb.jpg");
s2Img=loadImage("st.jpg");
}
// CREATING ALL THE SPRITES

function setup(){
createCanvas(800,500);
bg=createSprite(400,250);
bg.addImage(bgImage);
bg.visible=true;
bg.scale=0.23;

/*sb=createSprite(400,250);
sb.addImage(sbImg);
sb.visible=false;
sb.scale=0.23;*/

bg2=createSprite(400,250,800,250);
bg2.addImage(sbImg);
bg2.visible = false;


anyWhereDoor=createSprite(700,350);
anyWhereDoor.addImage(anyWhereDoorImage);
anyWhereDoor.visible=true;
anyWhereDoor.scale=0.8;

nobita=createSprite(70,430);
nobita.addImage(nobitaImage);
nobita.visible=true;
nobita.scale=0.3;

gian=createSprite(750,250);
gian.addImage(gianImage);
gian.visible= true;
gian.scale=0.6;

teacher=createSprite(640,50);
teacher.addImage(teacherImage);
teacher.visible = true;
teacher.scale=0.4;

s2=createSprite(400,250);
s2.addImage(s2Img);
s2.scale = 0.8;
s2.visible=false;

dot1=createSprite(640,50,5,5);
dot2=createSprite(750,250,5,5);
handel=createSprite(770,360,10,10);
border1=createSprite(400,-35,800,5);
border1.visible = true;
border1.shapeColor="Black";
border2=createSprite(400,535,800,5);
border2.visible = true;
border2.shapeColor="Black";
border3=createSprite(-45,250,5,500);
border3.visible = true;
border3.shapeColor="Black";
border4=createSprite(835,250,5,500);
border4.visible = true;
border4.shapeColor="Black";

dot3=createSprite(50,450,5,5);
dot3.shapeColor = "Green"
dot3.visible = false;
dot4=createSprite(700,400,5,5);
dot4.shapeColor = "Green"
dot4.visible = false;

/*dot4=createSprite(240,50,5,5);
dot4.shapeColor = "Yellow"
dot4.visible = false;*/

kh=createSprite(750,50,100,100);
kh.shapeColor="Brown";
kh.visible = false;

kaminari=createSprite(650,50)
kaminari.addImage(kaminariImage);
kaminari.visible= false;
kaminari.scale=0.3;

go=createSprite(380,230,800,250);
go.addImage(goImg);
go.visible = false;
go.scale=0.5;

yw=createSprite(420,250,800,250);
yw.addImage(ywImage);
yw.visible = false;
yw.scale=3;

restart=createSprite(400,250,800,500);
restart.addImage(restartImg);
restart.visible= false;

homeBg=createSprite(400,250,800,500);
homeBg.addImage(homeBgImg);
homeBg.scale=3.3;
homeBg.visible=false;

start1=createSprite(400,250);
start1.addImage(start1Img);
start1.scale=1;
start1.visible=false;

suneo=createSprite(270,50);
suneo.addImage(suneoImg);
suneo.visible = false;
suneo.scale=0.4;

gMom=createSprite(80,80)
gMom.addImage(gMomImg);
gMom.visible = false;
gMom.scale=0.5;

gianSinging=createSprite(700,400);
gianSinging.addImage(gianSingingImage);
gianSinging.sclae = 0.4;
gianSinging.visible=false;
bCoptor=createSprite(750,320);
bCoptor.addImage(bCoptorImage);
bCoptor.scale= 0.1;
bCoptor.visible =  false;

}

function draw() {
background(0);

textSize(15);

fill("Red");
// MAKING GAME STATES 
// GAME STATE HOME
if(gameState===3){
  homeBg.visible=true;
start1.visible=true;
if(keyDown("SPACE")){
        gameState=2;
    }
}


// GAME STATE SERVE
if(gameState===2){
  
background(0);
homeBg.visible=false;
start1.visible=false;
bg.visible = false;
 
text("Welcome to nobita Escape Game",0,50);
text("Here you have to escape from Gian and Nobita's Teacher and another problemns",0,200);
text("CONTROLS INFORMATION : USE ARROW KEYS TO MOVE AND SPACE TO BREAK AND ENTER TO START GAME",0,250);
text("You have to use doraemon Gadgets to escape provided by us",0,300);
text ("BEST OF LUCK AND HAVE FUN",0,350);
if(keyDown("ENTER")){
    gameState=1;
}
}
// GAME STATE PLAY
if(gameState===1){
    homeBg.visible=false;
    bg.visible = true;
    if(gian.x===750){
        gian.velocityX=-5;
    }
    
    if(gian.x===50){
        gian.velocityX=5;
    }
    if(dot2.x===750){
        dot2.velocityX=-5;
    }
    
    if(dot2.x===50){
        dot2.velocityX=5;
    }
    if(teacher.y===450){
        teacher.velocityY=-5;
    }
    
    if(teacher.y===50){
        teacher.velocityY=5;
    }
    if(dot1.y===450){
        dot1.velocityY=-5;
    }
    
    if(dot1.y===50){
        dot1.velocityY=5;
    }
    if(keyDown(UP_ARROW)){
        nobita.velocityY=-3;
    }
    if(keyDown(DOWN_ARROW)){
        nobita.velocityY=3;
    }
    if(keyDown(LEFT_ARROW)){
        nobita.velocityX=-3;
    }
    if(keyDown(RIGHT_ARROW)){
        nobita.velocityX=3;
    }
    if(nobita.isTouching(border1)){
        nobita.velocityY=1;
    }
    if(nobita.isTouching(border2)){
        nobita.velocityY=-1;
    }
    if(nobita.isTouching(border3)){
        nobita.velocityX=1;
    }
    if(nobita.isTouching(border4)){
        nobita.velocityX=-1;
    }
    if(keyDown("SPACE")){
        nobita.velocityX=0;
        nobita.velocityY=0;
    }
    
    if(nobita.isTouching(dot1)){
    go.visible = true;
    nobita.velocityX=0;
    nobita.velocityY=0;
    gameState=0;
    }
    if(nobita.isTouching(dot2)){
        go.visible = true;
        nobita.velocityX=0;
        nobita.velocityY=0;
        gameState=0;
        }
    
    
    if(nobita.isTouching(handel)){
        yw.visible = true;
        dot1.velocityY=0;
        dot2.velocityX=0;
        teacher.velocityY=0;
        gian.velocityX=0;
        nobita.velocityX=0;
        nobita.velocityY=0;
       
        if(keyDown("N")){
            gameState = 4;
        }
    }
 
        
}
// GAME STATE END
if(gameState===0){
restart.visible = true;

nobita.velocityX=0;
nobita.velocityY=0;
dot1.velocityY=0;
dot2.velocityX=0;
teacher.velocityY=0;
if(keyDown("R")){
    gameState=2;
}
}
if(gameState===4){
    bg2.sclae = 2.4;
  
 
  border1.visible = true;
  border2.visible = true;
  dot3.visible = true;
  
if(keyDown(UP_ARROW)){
    nobita.velocityY=-3;
}
if(keyDown(DOWN_ARROW)){
    nobita.velocityY=3;
}
if(keyDown(LEFT_ARROW)){
    nobita.velocityX=-3;
}
if(keyDown(RIGHT_ARROW)){
    nobita.velocityX=3;
}
if(nobita.isTouching(border1)){
    nobita.velocityY=1;
}
if(nobita.isTouching(border2)){
    nobita.velocityY=-1;
}
if(nobita.isTouching(border3)){
    nobita.velocityX=1;
}
if(nobita.isTouching(border4)){
    nobita.velocityX=-1;
}
if(suneo.y===450){
    suneo.velocityY=-5;
}

if(suneo.y===50){
suneo.velocityY=5;
}


if(gianSinging.isTouching(nobita)){
    gameState=0;
}
if(kaminari.isTouching(nobita)){
    gameState=0;
}
if(dot3.isTouching(nobita)){
    gMom.velocityX=4;
}
if(suneo.isTouching(nobita)){
    nobita.velocityX=0;
    nobita.velocityX=0;
    nobita.velocityY=0;
    nobita.velocityY=0;
    s2.visible=true;
    nobita.visible = false;
    gMom.visible = false;
    gianSinging.visible = false;
    suneo.visible = false;
    kaminari.visible = false;
     kh.visible = false;
     text("PRESS S FOR CONTINUE",600,450);
    if(keyDown("S")){
        suneo.destroy();
        nobita.velocityX=0;
    nobita.velocityX=0;
    nobita.velocityY=0;
    nobita.velocityY=0;
    s2.visible=false;
    nobita.visible = true;
    gMom.visible = true;
    gianSinging.visible =true;
    suneo.visible =true;
    kaminari.visible = true;
     kh.visible = true;
 
    }
    
}

if(gMom.isTouching(gianSinging)){

bCoptor.y=470;
gianSinging.destroy();
gMom.destroy();

}
if(nobita.isTouching(bCoptor)){
    gameState=4;
}
if(keyDown("SPACE")){
    nobita.velocityX=0;
    nobita.velocityY=0;
}




bCoptor.visible =  true;
kaminari.visible= true;
suneo.visible=true;
gMom.visible = true;
gianSinging.visible=true;
bg2.visible=true;
yw.visible = false;
bg.visible=false;
gian.visible= false;
teacher.visible = false;
anyWhereDoor.visible = false;
kh.visible = true;
nobita.x=50;
nobita.y=70;

gMom.x=50;
gMom.y=430;
suneo.x=200;
suneo.y=50;

}
/*if(gameState===5){
nobita.x=50;
nobita.y=50;

gian.x=550;
gian.y=50;

kaminari.x=300;
kaminari.y=50;

bCoptor.x=30;
bCoptor.y=470;

anyWhereDoor.x=750;
anyWhereDoor.y=50;


}*/

   



drawSprites();
}

