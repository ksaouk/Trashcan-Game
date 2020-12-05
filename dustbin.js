class Dustbin {
    constructor(x,y){
        
        this.image = loadImage("Sprites/dustbingreen.png");

        this.x=x;
		this.y=y;
		this.dustbinWidth=200;
		this.dustbinHeight=213;
        this.wallThickness=20;
        
        bottomBody = Bodies.rectangle(this.x, this.y, this.width, this.height, this.wallThickness, {isStatic:true});
        leftBody = Bodies.rectangle(this.x, this.y, this.width, this.height, this.wallThickness, {isStatic:true});
        rightBody = Bodies.rectangle(this.x, this.y, this.width, this.height, this.wallThickness, {isStatic:true});
    
        leftSprite = createSprite(width/1.2-100, 610, 20, 100);
        leftSprite.shapeColor = color("white");
    
        rightSprite = createSprite(width/1.2+100, 610, 20, 100);
        rightSprite.shapeColor = color("white");
    
        bottomSprite = createSprite(width/1.2, 650, 200, 20);
        bottomSprite.shapeColor = color("white");

        World.add(world, this.bottomBody);
        World.add(world, this.leftBody);
        World.add(world, this.rightBody);
    }

    display() {
        push()
        translate(this.rightBody.position.x, this.rightBody.position.y);
        rectMode(CENTER);
        angleMode(RADIANS)
        fill(225)
        rotate(this.angle)
        pop()

       
        push()
        translate(this.leftBody.position.x, this.leftBody.position.y);
        rectMode(CENTER);
        angleMode(RADIANS)
        fill(225)
        rotate(-1*this.angle)
        pop()

        push()
        translate(this.bottomBody.position.x, this.bottomBody.position.y+10);
        rectMode(CENTER);
        angleMode(RADIANS)
		fill(255)
		imageMode(CENTER);
        image(this.image, 0, -this.dustbinHeight/2,this.dustbinWidth, this.dustbinHeight);
        pop()

        
    }
  
} 
   