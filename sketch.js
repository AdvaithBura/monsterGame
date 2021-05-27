const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, bow, arrow, player, ground, player1, boyImg, bowImg, ground1, monster, monsterImg


function preload() {
boyImg = loadImage("boy.png");
bowImg = loadImage("bow.png");
arrowImg = loadImage("arrow.png");
monsterImg = loadImage("monster.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    rectMode(CENTER);

player = Bodies.rectangle(100,300,200,130);
World.add(world, player);
//player = new Player(100,300);

ground = Bodies.rectangle(600,380,1200,40,{isStatic:true});
World.add(world, ground);

arrow = Bodies.rectangle(player.position.x+100, player.position.y,100,50);
World.add(world, arrow);

}

function draw(){
    background("white");
    Engine.update(engine);

    player1 = player.position
    var ground1 = ground.position
//rect(player1.x, player1.y, 50,50);
imageMode(CENTER);
image(boyImg,player1.x,player1.y,250,250)
//player.display();
ground1 = rect(ground1.x,ground1.y,1200,40);
//ground1.visible = false;
//bow = rect(player1.x + 30,player1.y,20,50);
bow = image(bowImg, player1.x+100,player1.y,120,150);
monster = image(monsterImg, player1.x+700,player1.y,140,170);
monsterImg.scale = 0.3
//console.log(player1.x);


if(keyCode === 32){
    imageMode(CENTER);
//console.log(player1.x);
//push()
 //arrow.velocity.x = -5
 //console.log(player1.x+100);
//    for(var x = 0; x<= 800; x++){
  //  }
  arrow.position.x++
    image(arrowImg,arrow.position.x, arrow.position.y,100,50);
//pop()
  
}



}

/*
function spacePressed(){
    if(keyCode === 32){
        imageMode(CENTER);
    arrow = Bodies.rectangle(player1.x+100, player1.y,100,50, {isStatic:true});
    World.add(world, arrow);
    console.log(player1.x);
   // arrow.velocity.x = 5
//    for(var x = 0; x<= 800; x++){
 //   Ar = player1.x+100+x
image(arrowImg,arrow.position.x, arrow.position.y,100,50);
  //  }
 }
 //console.log(arrow)
}
*/