class Ball
{
    constructor(x,y,radius)
    {
        var options = 
        {
            isStatic:true,
        }
        this.body = Bodies.circle(x,y,radius, options);
        this.w = 20;
        this.h = 20;
        
        World.add(myWorld, this.body);
    }

    display()
    {
        push();
        rectMode(CENTER);
        fill("White");
        ellipse(this.body.position.x, this.body.position.y, this.w, this.h);

    }
}