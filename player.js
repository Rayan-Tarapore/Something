class Player{
    constructor(x,y,radius){
    var player_option={
        isStatic:false,
        frictionStatic:0.9,
        friction:0.2
    }
    
    this.body = Bodies.circle(x,y,radius,player_option);
    this.radius = radius
    World.add(world,this.body);
    
    }
    display(){
        var pos = this.body.position
        this.angle = this.body.angle
        ellipseMode(RADIUS);
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.angle);
        noStroke();
        fill(245,108,0)
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}