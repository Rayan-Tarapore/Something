const Body = Matter.Body;

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Detector = Matter.Detector;

var player,follower
var ground,wall
var drag
var end_bar,endurance

var gameMode
var cameraSet
var startButtonColour

//Level 1
var tile1,tile2,tile3

//Level 2
var tile4,tile5,tile6,tile7,tile8,tile9

var barrierHelp
var jumpBarrier
//help
var movementHelp

var endNum
var obs1
var obDim
//checkpoint
var checkpoint1,checkpoint2,checkpoint3
var check
function preload() {
    
}

function setup(){


    gameMode = 0
    cameraSet=false;
    startButtonColour = "orange"
    
    endNum = 1;
    var canvas = createCanvas(800,450);
    engine = Engine.create();
    world = engine.world;
    endurance = 100;
    player = new Player(100,350,20);
    ground = new Tile(450,425,999900,50);
    end_bar = new Bar(700,10,200,20);
    drag = 1
    tile1 = new Tile(400,350,120,10);

    //help
    movementHelp= "Use A and D to Move and SPACE to Jump"
    
    barrierHelp = new Tile(5,225,10,450);
    jumpBarrier = new Tile(795,337,10,226);


    //TILES Level 1
    tile2 = new Tile(550,300,120,10);
    tile3 = new Tile(700,250,120,10);

    //TILES Level 3
    tile4 = new Tile(1800,350,120,10);
    tile5 = new Tile(1660,275,120,10);
    tile6 = new Tile(1800,200,120,10);
    tile7 = new Tile(2000,250,10,200);
    tile8 = new Tile(2100,275,120,10);
    tile9 = new Tile(2250,350,120,10);
    

    //Obstacles LEVEL 2
    obDim = 30
    obs1 = new Obstacle(1000,375,obDim,obDim);
    ob2 = new Obstacle(1200,375,obDim,obDim);
    ob3 = new Obstacle(1400,375,obDim,obDim);

    //Obstacles LEVEL 3
    ob4 = new Obstacle(2000,135,obDim,obDim);
    ob5 = new Obstacle(2000,60,obDim,obDim);
    //checkpoint
    check = 0;


}

function draw(){
    rectMode(CENTER);

    background(150,150,150)
    Engine.update(engine);
    
    //Checkpoints
    fill("green")
    noStroke();
    rect(900,380,40,40);
    rect(1700,380,40,40);
    rect(2500,380,40,40);
    

    //Level 3 Special tile
    noStroke();
    fill("black");
    rect(2000,375,10,50);
    

    //collision
    collision(player.body,obs1.body);
    collision(player.body,ob2.body);
    collision(player.body,ob3.body);
    collision(player.body,ob4.body);
    collision(player.body,ob5.body);

    //PREGAME SCREEN
    if(gameMode ===1&&cameraSet===false){
        camera.position.x =400
        camera.position.y = 225
        cameraSet=true;
    } else if(gameMode===0){
        camera.position.x = -400
        camera.position.y = 100
        fill(startButtonColour);
        noStroke();
        rect(-400,175,400,50);
        fill("white")
        textSize(30);
        textFont("lucida console");
        text("PRESS SPACE TO START",-580,185)
        textFont("courier new")
        textSize(60);
        text("SOMETHING",-563,100);
        keyPressed();
    }

    

    //Game
    if(endurance>0){
        endurance = endurance-1
        end_bar.body.position.x = endurance+(800*endNum);
    }
    
    if(player.body.velocity.x>0){
        player.body.velocity.x = player.body.velocity.x-drag;
    }
    if(player.body.velocity.x<0){
        player.body.velocity.x = player.body.velocity.x+drag;
    }
    
    if(player.body.position.x>camera.position.x+400&&gameMode===1){
        camera.position.x=camera.position.x+800;
        end_bar.body.position.x =  end_bar.body.position.x +800;
        endNum = endNum+1
    } 
    if(player.body.position.x<camera.position.x-400&&player.body.position.x>0&&gameMode===1){
        camera.position.x=camera.position.x-800;
        end_bar.body.position.x =  end_bar.body.position.x -800;
        endNum = endNum-1
    } 

    //CHECKING
    if(player.body.position.x >=800&&check ===0&&player.body.position.x <=900){
    check = 1;
    }
    if(player.body.position.x >=1600&&check ===1&&player.body.position.x <=1700){
        check = 2;
        }
        if(player.body.position.x >=2400&&check ===2&&player.body.position.x <=2500){
            check = 3;
            }
            if(player.body.position.x >=3000&&check ===3&&player.body.position.x <=2500){
                check = 4;
                }
                if(player.body.position.x >=3600&&check ===4&&player.body.position.x <=2500){
                    check = 5;
                    }
                    if(player.body.position.x >=4200&&check ===5&&player.body.position.x <=2500){
                        check = 6;
                        }

    player.display();
    ground.display();
    end_bar.display();
    
    barrierHelp.display();
    jumpBarrier.display();

    //help Text for First Level
    textFont("courier new")
    if(check===0){
    textSize(20);
    text(movementHelp,180,150);
    text("Jump >",700,200);
    textSize(18);
    text("You can jump when this Yellow Bar is full >",230,18);
    }
    
    //help text for Second Level
    if(check===1){
        textSize(30);
        text("Avoid these Obstacles",1010,150);
        textSize(20);
        text("This Green Box is",810,300);
        text("the Checkpoint",825,330);
    }

    //help text for Third Level
    if(check===2){
        textSize(18);
        text("This Level needs some good skills",2025,140);
    }
    //level Text
    textSize(35);
    text("LEVEL 1",25,40);
    text("LEVEL 2",825,40);
    text("LEVEL 3",1625,40);

    
    //TILES
    tile1.display();
    tile2.display();
    tile3.display();
    tile4.display();
    tile5.display();
    tile6.display();
    tile7.display(); 
    tile8.display();
    tile9.display();
    //OBSTACLES
    obs1.display();
    ob2.display();
    ob3.display();
    ob4.display();
    ob5.display();

    drawSprites();
}

//Jump
function keyPressed(){
    if(keyCode===68||keyCode===RIGHT_ARROW&&gameMode===1){
    Body.setVelocity(player.body,{x:9,y:player.body.velocity.y})
    }
    if(keyCode===65||keyCode===LEFT_ARROW&&gameMode===1){
    Body.setVelocity(player.body,{x:-9,y:player.body.velocity.y})
    }
    if(keyCode===32&&endurance===0&&gameMode===1){
        Body.setVelocity(player.body,{x:player.body.velocity.x,y:-7})
        endurance = 100;
    }
    if(keyCode===32&&gameMode===0){
        gameMode=1
    }
}
function collision(ob1,ob2){
//LEFT
if(Math.round(ob1.position.x)+20 === ob2.position.x-obDim/2&&Math.round(ob1.position.y)>ob2.position.y-obDim/2&&Math.round(ob1.position.y)<ob2.position.y+obDim/2){
    Body.setVelocity(ob1,{x:0,y:0})
    Body.setPosition(ob1,{x:100+(check*800),y:350})
}
//RIGHT
if(Math.round(ob1.position.x)-20 === ob2.position.x+obDim/2&&Math.round(ob1.position.y)>ob2.position.y-obDim/2&&Math.round(ob1.position.y)<ob2.position.y+obDim/2){
    Body.setVelocity(ob1,{x:0,y:0})
    Body.setPosition(ob1,{x:100+(check*800),y:350})
}
//TOP
if(Math.round(ob1.position.y)+20 === ob2.position.y-obDim/2&&Math.round(ob1.position.x)>ob2.position.x-obDim/2&&Math.round(ob1.position.x)<ob2.position.x+obDim/2){
    Body.setVelocity(ob1,{x:0,y:0})
    Body.setPosition(ob1,{x:100+(check*800),y:350})
}
//BOTTTOM
if(Math.round(ob1.position.y)-20 === ob2.position.y+obDim/2&&Math.round(ob1.position.x)>ob2.position.x-obDim/2&&Math.round(ob1.position.x)<ob2.position.x+obDim/2){
    Body.setVelocity(ob1,{x:0,y:0})
    Body.setPosition(ob1,{x:100+(check*800),y:350})
}
}
