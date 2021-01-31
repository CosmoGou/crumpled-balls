
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Paper1,ground;
var boxRightSprite,boxleftSprite,boxBase;
var engine;
function preload()
{
	
}

function setup() {
	createCanvas(800,400);
	rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	//Create the Bodies Here.
	Paper1 = new Paper(100,280,40);
	ground = new Ground(380,390,890,10,{isStatic:false});
	boxPosition=width/2+150
 	boxY=338;


 	boxleftSprite=createSprite(boxPosition, boxY, 10,80);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxLeftBody = Bodies.rectangle(boxPosition-20, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(boxPosition+100, boxY+40, 210,10);
 	boxBase.shapeColor=color(255,0,0);

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);
	box.debug = true;
 	boxleftSprite=createSprite(boxPosition+200 , boxY, 10,80);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);

	
}


function draw() {
  rectMode(CENTER);
  background(0)
Paper1.Display();
ground.Display();
drawSprites();
if(keyDown("up")){
Matter.Body.applyForce(Paper1.body,Paper1.body.position,{x:8,y:-10})
}
}



