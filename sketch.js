var engine,world;
var rope1,rope2,rope3,rope4,rope5;
var bob1,bob2,bob3,bob4,bob5;
var roof;

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {

  createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
  
  roof = new Roof(width/2,100,200,10);

	bob1 = new Bob(320,500,20);
	bob2 = new Bob(360,500,20);
	bob3 = new Bob(width/2,500,20);
	bob4 = new Bob(440,500,20);
	bob5 = new Bob(480,500,20);

 // rope1 = new Rope(bob1.body, roof.body, bob1.Diameter*2, 20);
 // rope2 = new Rope(bob2.body, roof.body, bob2.Diameter*2,  0);
 // rope3 = new Rope(bob3.body, roof.body, bob3.Diameter*2, 0);
 // rope4 = new Rope(bob4.body, roof.body, bob4.Diameter*2, 0);
 // rope5 = new Rope(bob5.body, roof.body, bob5.Diameter*2, {x:200,y:50});
 
  rope1 = new Rope(bob1.body, roof.body, 40, 0);
  rope2 = new Rope(bob2.body, roof.body, 40, 0);
  rope3 = new Rope(bob3.body, roof.body, 40, 0);
  rope4 = new Rope(bob4.body, roof.body, 40, 0);
  rope5 = new Rope(bob5.body, roof.body, 40, 0);

  Engine.run(engine);
  
}


function draw() {

  background(255);
  Engine.update(engine);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

  rope1.display(bob1.body, roof.body);
  rope2.display(bob2.body, roof.body);
  rope3.display(bob3.body, roof.body);
  rope4.display(bob4.body, roof.body);
  rope5.display(bob5.body, roof.body);

  drawSprites();
 
}

function keyPressed() {  
  
  //    Matter.Body.applyForce(paper.body,{x: 0.045, y: 0.055}, {x: 0.04, y: -0.06});

   console.log(1);

    Matter.Body.setPosition(bob1.body,{x:50 , y:200});
    console.log(2);

  //  Body.applyForce(paper.body,{x: paper.body.position.x, y: 200}, {x: 25, y: 45});
    
 
 //   Body.applyForce(bob1.body,{x: bob1.body.position.x, y: bob1.body.position.y}, {x: 100, y: -200});
    
   
}

function mouseDragged(){

  //alert(1);
 // Matter.Body.setPosition(bob1.body,{x:50 , y:200});

}
