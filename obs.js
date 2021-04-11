class Obstacle{
    constructor(x,y,width,height){
    var obs_option={
        isStatic:true
    }
    
    this.body = Bodies.rectangle(x,y,width,height,obs_option);
    this.width = width;
    this.height = height;
    World.add(world,this.body);
    
    }
    display(){
        var pos = this.body.position
        rectMode(CENTER);
        noStroke();
        fill("red")
        rect(pos.x,pos.y,this.width,this.height);
    }
}