class Ball {
    constructor(x, y, radius){
        var options = {
            restitution: 0.3,
            friction: 0.5,
            density: 1 
        }
        this.radius = radius;
        this.body = Bodies.circle(x, y, radius, options);
        World.add(world, this.body);

    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        ellipse(0,0, this.radius, this.radius);
        pop();
    }
}