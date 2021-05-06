const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground,block1,stand1,hexagon,hexagonImg;
var Slingshot,backgroundImg;
var bg = "bg.png";
var score = 0


function preload(){
   hexagonImg = loadImage("hexagon.png");
   getBackgroundImg();
}

function setup() {
  var canvas = createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,390,800,25); 
  stand1 = new Ground(380,340,250,10);
  stand2 = new Ground(650,220,190,10)


  block1 = new Block(285,320,30,40);
  block2 = new Block(315,320,30,40);
  block3 = new Block(345,320,30,40);
  block4 = new Block(375,320,30,40);
  block5 = new Block(405,320,30,40);
  block6 = new Block(435,320,30,40);
  block7 = new Block(465,320,30,40);
  
  block8 = new Block(315,280,30,40);
  block9 = new Block(345,280,30,40);
  block10 = new Block(375,280,30,40);
  block11 = new Block(405,280,30,40);
  block12 = new Block(435,280,30,40);

  block13 = new Block(345,240,30,40);
  block14 = new Block(375,240,30,40);
  block15 = new Block(405,240,30,40);

  block16 = new Block(375,200,30,40);

  block17 = new Block(585,200,30,40);
  block18 = new Block(615,200,30,40);
  block19 = new Block(645,200,30,40);
  block20 = new Block(675,200,30,40);
  block21 = new Block(705,200,30,40);

  block22 = new Block(675,160,30,40);
  block23 = new Block(645,160,30,40);
  block24 = new Block(615,160,30,40);

  block25 = new Block(645,120,30,40);

  hexagon = Bodies.circle(50,200,20);
  World.add(world,hexagon);

  Slingshot = new SlingShot(this.hexagon,{x:100, y:200});
}

function draw() {
 if(backgroundImg){
        background(backgroundImg);
    }
    noStroke();
    textSize(35)
    fill("white")
    text("Score  " + score, width-300, 50)
  Engine.update(engine);

  hexagon.x = hexagon.position.x;
  hexagon.y = hexagon.position.y;

  
  imageMode(CENTER);
  image(hexagonImg,hexagon.position.x,hexagon.position.y,40,40)
  
  ground.display();
  stand1.display();
  stand2.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();


  drawSprites();
}
function keyPressed(){
    if(keyCode === 32){
      Slingshot.attach(this.hexagon);
    }
}
function mouseDragged(){
  Matter.Body.setPosition(this.hexagon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  Slingshot.fly();
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1900){
      bg = "bg.png";
  }
  else{
      bg = "bg2.jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}