class Rope
{
	constructor()
	{
		this.body = Bodies.Constraint
		(

			{
				bodyA: body1,
				bodyB: body2,

				length: -80,
				stiffness: 1

			}
		);
		
		World.add(myWorld, this.body);

		//create constraint here

	}

	display()
	{
		push();
		stroke("White");
		strokeWeight(2);
		line(this.body1.position.x, this.body1.position.y, this.body2.position.x, this.body2.position.y);
		pop();	
	}
}


