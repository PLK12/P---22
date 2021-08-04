const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var body1, body2

var rope;
var roof;
var ball1, ball2, ball3, ball4, ball;
var myWorld, myEngine;
var rope1, rope2, rope3, rope4, rope5;
//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	myEngine = Engine.create();
	myWorld = myEngine.world;

	var render = Render.create(
		{
			element: document.body,
			engine: myEngine,
			options:
			{
			  width: 400,
			  height: 400,
			  wireframes: false,
		    }
	
		}	
		);
		Render.run(render);
	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(myWorld,roof);

	ball1 = new Ball(300,300,20);
	ball2 = new Ball(350,300,20);
	ball3 = new Ball(400,300,20);
	ball4 = new Ball(450, 300, 20);
	ball5 = new Ball(500,300,20);

	rope1 = new Rope(ball1, roof, -80,0);
	/*rope2 = new Rope(ball2, roof, -80,0);
	rope3 = new Rope(ball3, roof, -80,0);
	rope4 = new Rope(ball4, roof, -80,0);
	rope5 = new Rope(ball5, roof, -80,0);*/


	Engine.run(myEngine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  rope1.display();
  
 /* rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
*/

 


  text(mouseX +","+ mouseY, mouseX, mouseY);

  //call display() to show ropes here

  
  //create ellipse shape for multiple bobs here

 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.

function keyPressed()
{
	if(keyCode === RIGHT_ARROW)
	{
		body.applyForce(ball1,{x:0, y:0}, {x:0.005, y:0});


	}
}



